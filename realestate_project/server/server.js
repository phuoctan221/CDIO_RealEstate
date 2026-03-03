// =======================================
// IMPORT
// =======================================
require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// =======================================
// CONFIG
// =======================================
const app = express();
const PORT = 5000;
const SECRET_KEY = "real_estate_secret_key";

// =======================================
// MIDDLEWARE
// =======================================
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// =======================================
// MYSQL POOL
// =======================================
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "real_estate_db",
  port: 3307,
  waitForConnections: true,
  connectionLimit: 10,
});

// =======================================
// MULTER CONFIG
// =======================================
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// =======================================
// VERIFY TOKEN
// =======================================
function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(403).json({ message: "No token" });

  const token = authHeader.split(" ")[1];

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Invalid token" });
    req.user = decoded;
    next();
  });
}

// =======================================
// LOGIN
// =======================================
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email=?",
    [email],
    (err, result) => {
      if (err) return res.status(500).json(err);
      if (result.length === 0)
        return res.status(401).json({ message: "Email không tồn tại" });

      const user = result[0];

      if (password !== user.password) {
        return res.status(401).json({ message: "Sai mật khẩu" });
      }

      const token = jwt.sign(
        { id: user.id, role: user.role },
        SECRET_KEY,
        { expiresIn: "1d" }
      );

      res.json({ token, user });
    }
  );
});

// =======================================
// GET PROPERTIES (PAGINATION)
// =======================================
app.get("/properties", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 6;
  const offset = (page - 1) * limit;

  const sql = `
      SELECT 
        p.id,
        p.title,
        p.price,
        p.area,
        p.bedrooms,
        p.bathrooms,
        p.is_featured,
        pr.name AS province,
        d.name AS district,
        pi.image_url
      FROM properties p
      LEFT JOIN provinces pr ON p.province_id = pr.id
      LEFT JOIN districts d ON p.district_id = d.id
      LEFT JOIN property_images pi 
        ON p.id = pi.property_id AND pi.is_primary = 1
      WHERE p.status = 'active'
      ORDER BY p.created_at DESC
      LIMIT ? OFFSET ?
    `;

  db.query(sql, [limit, offset], (err, result) => {
    if (err) return res.status(500).json(err);

    res.json({
      page,
      data: result,
    });
  });
});

// =======================================
// GET DETAIL
// =======================================
app.get("/properties/:id", (req, res) => {
  const id = req.params.id;

  const sql = `
      SELECT p.*, pr.name AS province, d.name AS district
      FROM properties p
      LEFT JOIN provinces pr ON p.province_id = pr.id
      LEFT JOIN districts d ON p.district_id = d.id
      WHERE p.id=?
    `;

  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length === 0)
      return res.status(404).json({ message: "Not found" });

    const property = result[0];

    db.query(
      "SELECT * FROM property_images WHERE property_id=?",
      [id],
      (err2, images) => {
        if (err2) return res.status(500).json(err2);

        property.images = images;
        res.json(property);
      },
    );
  });
});

// =======================================
// ADD PROPERTY (UPLOAD ẢNH)
// =======================================
app.post("/properties", verifyToken, upload.array("images", 5), (req, res) => {
  const {
    title,
    description,
    price,
    area,
    bedrooms,
    bathrooms,
    province_id,
    district_id,
  } = req.body;

  // GÁN GIÁ TRỊ MẶC ĐỊNH NẾU KHÔNG CÓ
  const finalDescription = description || "";
  const finalProvinceId = province_id || 1;   // đổi 1 thành id mặc định của bạn
  const finalDistrictId = district_id || 1;   // đổi 1 thành id mặc định của bạn

  const sql = `
    INSERT INTO properties
    (title, description, price, area, bedrooms, bathrooms, province_id, district_id, user_id, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'active')
  `;

  db.query(
    sql,
    [
      title,
      finalDescription,
      price,
      area,
      bedrooms,
      bathrooms,
      finalProvinceId,
      finalDistrictId,
      req.user.id,
    ],
    (err, result) => {
      if (err) {
        console.error("INSERT ERROR:", err);
        return res.status(500).json(err);
      }

      const propertyId = result.insertId;

      if (req.files && req.files.length > 0) {
        req.files.forEach((file, index) => {
          db.query(
            "INSERT INTO property_images (property_id, image_url, is_primary) VALUES (?, ?, ?)",
            [
              propertyId,
              `http://localhost:5000/uploads/${file.filename}`,
              index === 0 ? 1 : 0,
            ]
          );
        });
      }

      res.json({ message: "Thêm thành công" });
    }
  );
});

// =======================================
// ADMIN DELETE
// =======================================
app.delete("/properties/:id", verifyToken, (req, res) => {
  if (req.user.role !== "admin")
    return res.status(403).json({ message: "No permission" });

  db.query("DELETE FROM properties WHERE id=?", [req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Xóa thành công" });
  });
});


//
app.put("/properties/:id", verifyToken, (req, res) => {
  const { title, price, area, bedrooms, bathrooms } = req.body;

  db.query(
    "UPDATE properties SET title=?, price=?, area=?, bedrooms=?, bathrooms=? WHERE id=?",
    [title, price, area, bedrooms, bathrooms, req.params.id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Cập nhật thành công" });
    }
  );
});


// =======================================
// SEND CONTACT EMAIL
// =======================================
const nodemailer = require("nodemailer");

app.post("/contact", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, subject, message } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email không hợp lệ" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // =========================
    // Gửi mail cho ADMIN
    // =========================
    await transporter.sendMail({
      from: `"Website Real Estate" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Liên hệ mới: ${subject || "Khách hàng gửi liên hệ"}`,
      html: `
        <h2>Thông tin khách hàng</h2>
        <p><strong>Họ tên:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>SĐT:</strong> ${phone}</p>
        <p><strong>Quan tâm:</strong> ${subject}</p>
        <p><strong>Nội dung:</strong></p>
        <p>${message}</p>
      `,
    });

    // =========================
    // Gửi mail phản hồi cho KHÁCH
    // =========================
    await transporter.sendMail({
      from: `"Real Estate Company" <${process.env.EMAIL_USER}>`,
      to: email,
      replyTo: process.env.EMAIL_USER,
      subject: "Xác nhận đã nhận thông tin liên hệ từ Quý khách",

      text: `Kính gửi ${lastName},

Cảm ơn Quý khách đã liên hệ với Real Estate.

Chúng tôi đã nhận được thông tin của Quý khách và bộ phận tư vấn sẽ liên hệ trong thời gian sớm nhất.

Nếu cần hỗ trợ gấp, vui lòng liên hệ trực tiếp với chúng tôi qua email này.

Trân trọng,
Real Estate Team`,

      html: `
<div style="font-family: Arial, sans-serif; line-height:1.6; color:#333;">
  <div style="max-width:600px; margin:0 auto; padding:20px; border:1px solid #eee; border-radius:8px;">
    
    <h2 style="color:#0f172a;">Kính gửi ${lastName},</h2>

    <p>
      Cảm ơn Quý khách đã quan tâm và gửi thông tin liên hệ đến <strong>Real Estate</strong>.
    </p>

    <p>
      Chúng tôi xác nhận đã nhận được yêu cầu của Quý khách và bộ phận tư vấn sẽ phản hồi trong thời gian sớm nhất.
    </p>

    <hr style="margin:20px 0;" />

    <h3 style="color:#0f172a;">Thông tin Quý khách đã gửi:</h3>
    <p><strong>Họ tên:</strong> ${firstName} ${lastName}</p>
    <p><strong>Số điện thoại:</strong> ${phone}</p>
    <p><strong>Nội dung:</strong></p>
    <p style="background:#f8fafc; padding:12px; border-radius:6px;">
      ${message}
    </p>

    <br/>

    <p>
      Nếu cần hỗ trợ ngay, vui lòng phản hồi trực tiếp email này.
    </p>

    <p style="margin-top:30px;">
      Trân trọng,<br/>
      <strong>Real Estate Team</strong><br/>
      Hotline: 0935 098 xxx<br/>
      Email: ${process.env.EMAIL_USER}
    </p>

  </div>
</div>
`,
    });

    res.json({ message: "Gửi email thành công 🎉" });
  } catch (error) {
    console.error("SEND MAIL ERROR:", error);
    res.status(500).json({ message: "Gửi email thất bại ❌" });
  }
});

// =======================================
// START
// =======================================
app.listen(PORT, () => {
  console.log(`🚀 Server chạy tại http://localhost:${PORT}`);
});
