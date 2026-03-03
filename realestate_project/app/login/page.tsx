"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError("");

    if (!email || !password) {
      setError("Vui lòng nhập đầy đủ email và mật khẩu");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Đăng nhập thất bại");
        return;
      }

      // Lưu token
      localStorage.setItem("token", data.token);

      // Chuyển trang admin
      router.push("/admin");
    } catch (err) {
      setError("Không thể kết nối server");
    } finally {
      setLoading(false);
    }
  };

  // Nhấn Enter để login
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-96 p-6 bg-white shadow-lg rounded-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Đăng nhập quản trị
        </h2>

        {error && (
          <div className="mb-4 p-2 text-sm text-red-600 bg-red-100 rounded">
            {error}
          </div>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <input
          type="password"
          placeholder="Mật khẩu"
          className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-black text-white p-2 rounded hover:bg-gray-800 transition disabled:opacity-50"
        >
          {loading ? "Đang đăng nhập..." : "Đăng nhập"}
        </button>

        {/* Nút quay lại trang chủ */}
        <Link
          href="/"
          className="block text-center mt-4 text-sm text-gray-600 hover:underline"
        >
          ← Quay lại trang chủ
        </Link>
      </div>
    </div>
  );
}
