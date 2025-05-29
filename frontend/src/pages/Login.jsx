import React, { useState } from "react";
import { Link } from "react-router-dom";
import login_img from "../assets/imgs/login_imgs.webp";
import { login } from '../services/authService.js';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await login(id, password, rememberMe);
      navigate("/");
      alert("Login successful");
    } catch (err) {
      alert("Login failed");
      console.log(err);
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white">
      <div className="absolute inset-0">
        <img
          src={login_img}
          alt="Background"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Login form */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="bg-white text-black px-6 md:px-10 py-10 md:py-12 rounded-md w-full max-w-[400px] shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-center">Đăng Nhập</h2>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div className="text-base text-gray">Số định danh cá nhân</div>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Nhập số định danh cá nhân"
              className="text-black px-4 py-3 rounded border border-gray-500 focus:outline-none"
              required
            />
            <div className="text-base text-gray">Mật khẩu</div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập mật khẩu"
              className=" text-black px-4 py-3 rounded border border-gray-500 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-[#f6121d] text-white cursor-pointer py-3 rounded font-bold mt-2"
            >
              Đăng nhập
            </button>
          </form>

          <div className="mt-6 text-sm text-gray-700 underline hover:text-white cursor-pointer">
            <Link to="/forgot-password">Quên mật khẩu?</Link>
          </div>

          <div className="flex items-center mt-4 gap-2 text-sm text-gray-700">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="accent-red-600"
            />
            <label htmlFor="remember">Ghi nhớ đăng nhập</label>
          </div>

          <div className="mt-6 text-sm text-gray-700">
            Bạn chưa có tài khoản?{" "}
            <Link
              to="/register"
              className="text-[#f6121d] underline cursor-pointer"
            >
              Đăng ký.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
