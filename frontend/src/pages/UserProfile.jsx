import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import avatar from "../assets/imgs/avatar.webp"
import { logout } from '../services/authService';

const UserProfile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    avatar: avatar,
    name: 'Nguyễn Văn A',
    age: 25,
    sex: 'Nam',
    dob: '01/01/2000',
    address: 'Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội',
    phone: '0909123456',
    citizenId: '123456789012',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ ...user });

  const handleLogout = () => {
    alert('Bạn đã đăng xuất');
    logout();
    navigate('/login');
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setEditData({ ...editData, avatar: imageUrl });
    }
  };

  const handleSave = () => {
    setUser(editData);
    setIsEditing(false);
    alert('Thông tin đã được cập nhật!');
  };

  const handleCancel = () => {
    setEditData(user);
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto bg-gray-100 py-6 px-4 min-h-150 md:p-12">
      <div className=" mx-auto p-6">
        <div>
          <img
            className="w-32 h-32 rounded-full border-4 border-blue-500"
            src={isEditing ? editData.avatar : user.avatar}
            alt="Ảnh đại diện"
          />
          {isEditing && (
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-2 block border w-50 p-1"
            />
          )}
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={editData.name}
              onChange={handleEditChange}
              className="mt-4 text-xl font-semibold border rounded px-2 py-1"
            />
          ) : (
            <h2 className="mt-4 text-2xl font-bold text-gray-800">{user.name}</h2>
          )}
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
          {[
            { label: 'Tuổi', key: 'age' },
            { label: 'Ngày sinh', key: 'dob' },
            { label: 'Giới tính', key: 'sex' },
            { label: 'SĐT', key: 'phone' },
            { label: 'CCCD', key: 'citizenId' },
            { label: 'Địa chỉ', key: 'address', full: true }
          ].map((item) => (
            <div
              key={item.key}
              className={item.full ? 'sm:col-span-2' : ''}
            >
              <span className="font-semibold">{item.label}:</span>{' '}
              {isEditing ? (
                <input
                  type="text"
                  name={item.key}
                  value={editData[item.key]}
                  onChange={handleEditChange}
                  className="border rounded px-2 py-1 w-full mt-1"
                />
              ) : (
                <span>{user[item.key]}</span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row justify-between gap-4">
          {isEditing ? (
            <>
              <button onClick={handleSave} className="w-full sm:w-auto px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
                Lưu thay đổi
              </button>
              <button onClick={handleCancel} className="w-full sm:w-auto px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition">
                Hủy
              </button>
            </>
          ) : (
            <>
              <button onClick={() => setIsEditing(true)} className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                Chỉnh sửa thông tin
              </button>
              <button onClick={handleLogout} className="w-full sm:w-auto px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">
                Đăng xuất
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
