import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import login_img from "../assets/imgs/login_imgs.webp";
import api from "../services/api.js";

const Register = () => {
  const [username, setUsername] = useState("");
  const [id, setId] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Mật khẩu không khớp.");
      return;
    }

    setError("");

    try {
      await api.post("auth/register", {
        username: id,
        fullName: username,
        identityCard: id,
        phoneNumber: phone,
        email,
        password,
      });
      setUsername("");
      setId("");
      setPhone("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      navigate("/login");
      // Xuất lý dụng thêm người dùng
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" min-h-screen bg-black text-white">
      <div className="absolute inset-0">
        <img
          src={login_img}
          alt="Background"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Register form */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="bg-white text-black px-6 md:px-10 py-10 md:py-12 rounded-md w-full max-w-[400px] shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-center">Đăng Ký</h2>

          <form onSubmit={handleRegister} className="flex flex-col gap-3">
            <div className="text-base text-gray">Tên người dùng</div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Nhập tên người dùng"
              className="text-black px-3 py-2 rounded border border-gray-500 focus:outline-none text-sm"
              required
            />
            <div className="text-base text-gray">Số định danh cá nhân</div>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Nhập số định danh cá nhân"
              className="text-black px-3 py-2 rounded border border-gray-500 focus:outline-none text-sm"
              required
            />
            <div className="text-base text-gray">Số điện thoại</div>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Nhập số điện thoại"
              className="text-black px-3 py-2 rounded border border-gray-500 focus:outline-none text-sm"
              required
            />
            <div className="text-base text-gray">Email</div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Nhập email"
              className="text-black px-3 py-2 rounded border border-gray-500 focus:outline-none text-sm"
              required
            />
            <div className="text-base text-gray">Mật khẩu</div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập mật khẩu"
              className="text-black px-3 py-2 rounded border border-gray-500 focus:outline-none text-sm"
              required
            />
            <div className="text-base text-gray">Nhập lại mật khẩu</div>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Nhập lại mật khẩu"
              className="text-black px-3 py-2 rounded border border-gray-500 focus:outline-none text-sm"
              required
            />
            {error && <div className="text-red-500 text-sm">{error}</div>}

            <button
              type="submit"
              className="bg-[#f6121d] text-white py-2 rounded font-bold mt-2 text-sm cursor-pointer"
            >
              Đăng ký
            </button>
          </form>

          <div className="mt-6 text-sm text-gray-700 text-center">
            Đã có tài khoản?{" "}
            <Link
              to="/login"
              className="text-[#e50914] underline cursor-pointer"
            >
              Đăng nhập.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
