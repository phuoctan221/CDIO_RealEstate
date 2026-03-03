"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Plus,
  Pencil,
  Trash2,
  X,
  LogOut,
  LayoutDashboard,
  Building2,
} from "lucide-react";

interface Property {
  id: number;
  title: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  price: number;
}

export default function AdminPage() {
  const router = useRouter();
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  const [form, setForm] = useState({
    title: "",
    bedrooms: 0,
    bathrooms: 0,
    area: 0,
    price: 0,
  });

  // ================================
  // CHECK LOGIN + LOAD DATA
  // ================================
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    fetchData();
  }, []);

  const fetchData = async () => {
  try {
    const token = localStorage.getItem("token");

    const res = await fetch("http://localhost:5000/properties", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await res.json();

    if (result && Array.isArray(result.data)) {
      setProperties(result.data);
    } else {
      setProperties([]);
    }

  } catch (error) {
    console.error("Lỗi tải dữ liệu", error);
    setProperties([]);
  }
};

  // ================================
  // CLOSE MODAL
  // ================================
  const closeModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
    setForm({ title: "", bedrooms: 0, bathrooms: 0, area: 0, price: 0 });
  };

  // ================================
  // CREATE / UPDATE
  // ================================
  const handleSubmit = async () => {
    if (!form.title.trim()) {
      alert("Vui lòng nhập tiêu đề");
      return;
    }

    const token = localStorage.getItem("token");

    try {
      setLoading(true);

      const url = editingId
        ? `http://localhost:5000/properties/${editingId}`
        : "http://localhost:5000/properties";

      const method = editingId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: form.title,
          bedrooms: Number(form.bedrooms),
          bathrooms: Number(form.bathrooms),
          area: Number(form.area),
          price: Number(form.price),
        }),
      });

      if (!res.ok) throw new Error("Lỗi server");

      await fetchData();
      closeModal();
    } catch (error) {
      alert("Lưu thất bại");
    } finally {
      setLoading(false);
    }
  };

  // ================================
  // EDIT
  // ================================
  const handleEdit = (item: Property) => {
    setForm({
      title: item.title,
      bedrooms: item.bedrooms,
      bathrooms: item.bathrooms,
      area: item.area,
      price: item.price,
    });

    setEditingId(item.id);
    setIsModalOpen(true);
  };

  // ================================
  // DELETE
  // ================================
  const handleDelete = async (id: number) => {
    if (!confirm("Xác nhận xóa?")) return;

    const token = localStorage.getItem("token");

    await fetch(`http://localhost:5000/properties/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    fetchData();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r p-6 flex flex-col fixed h-full">
        <div className="flex items-center gap-2 mb-10 text-orange-600 font-bold text-xl italic">
          <Building2 /> CDIO RealEstate
        </div>

        <nav className="flex-1">
          <div className="flex items-center gap-3 p-3 bg-orange-50 text-orange-600 rounded-xl font-medium">
            <LayoutDashboard size={20} /> Dashboard
          </div>
        </nav>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            router.push("/login");
          }}
          className="flex items-center gap-3 p-3 text-red-500 hover:bg-red-50 rounded-xl"
        >
          <LogOut size={20} /> Đăng xuất
        </button>
      </aside>

      {/* MAIN */}
      <main className="flex-1 ml-64 p-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h1 className="text-4xl font-bold">Quản lý tin đăng</h1>
              <p className="text-gray-500 mt-2">
                Tổng cộng {properties.length} bài viết
              </p>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-2xl"
            >
              <Plus size={20} /> Thêm mới
            </button>
          </div>

          {/* TABLE */}
          <div className="bg-white rounded-3xl shadow border overflow-hidden">
            <table className="w-full">
              <tbody>
                {properties.map((item) => (
                  <tr key={item.id} className="border-t hover:bg-gray-50">
                    <td className="px-8 py-5 font-bold">{item.title}</td>
                    <td className="px-4 py-5 text-sm">
                      {item.bedrooms} PN • {item.bathrooms} PT • {item.area}m²
                    </td>
                    <td className="px-4 py-5 text-orange-600 font-semibold">
                      {item.price} Tỷ
                    </td>
                    <td className="px-4 py-5 flex gap-3">
                      <button
                        onClick={() => handleEdit(item)}
                        className="text-blue-600 hover:scale-110 transition"
                      >
                        <Pencil size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="text-red-600 hover:scale-110 transition"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* ================= MODAL ĐẸP HƠN ================= */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl p-8 relative">

            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800">
                {editingId ? "Chỉnh sửa bất động sản" : "Thêm bất động sản mới"}
              </h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X size={20} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="md:col-span-2">
                <label className="text-sm font-semibold text-gray-600">
                  Tiêu đề
                </label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) =>
                    setForm({ ...form, title: e.target.value })
                  }
                  className="w-full mt-2 border rounded-2xl px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-600">
                  Phòng ngủ
                </label>
                <input
                  type="number"
                  value={form.bedrooms}
                  onChange={(e) =>
                    setForm({ ...form, bedrooms: Number(e.target.value) })
                  }
                  className="w-full mt-2 border rounded-2xl px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-600">
                  Phòng tắm
                </label>
                <input
                  type="number"
                  value={form.bathrooms}
                  onChange={(e) =>
                    setForm({ ...form, bathrooms: Number(e.target.value) })
                  }
                  className="w-full mt-2 border rounded-2xl px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-600">
                  Diện tích (m²)
                </label>
                <input
                  type="number"
                  value={form.area}
                  onChange={(e) =>
                    setForm({ ...form, area: Number(e.target.value) })
                  }
                  className="w-full mt-2 border rounded-2xl px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-600">
                  Giá (Tỷ)
                </label>
                <input
                  type="number"
                  value={form.price}
                  onChange={(e) =>
                    setForm({ ...form, price: Number(e.target.value) })
                  }
                  className="w-full mt-2 border rounded-2xl px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full mt-8 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 rounded-2xl transition shadow-md"
            >
              {loading
                ? "Đang lưu..."
                : editingId
                ? "Cập nhật bất động sản"
                : "Thêm bất động sản"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}