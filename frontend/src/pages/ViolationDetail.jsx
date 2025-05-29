import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useViolationStore from '../stores/violationStore';

// const fakeViolationDetails = {
//     1: {
//         name: 'Nguyễn Văn A',
//         age: 32,
//         hometown: 'Hà Nội',
//         date: '20/05/2025',
//         amount: '1.500.000 VND',
//         image: '',
//         paid: false,
//     },
//     2: {
//         name: 'Trần Thị B',
//         age: 28,
//         hometown: 'Nam Định',
//         date: '18/04/2025',
//         amount: '750.000 VND',
//         image: '',
//         paid: true,
//     },
// };

const ViolationDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
      const detail = useViolationStore((state) => state.detail);
    if (!id || !detail) {
        return (
            <div className="container mx-auto min-h-screen flex items-center justify-center bg-gray-100 py-6 px-4">
                <div className="text-center text-gray-600">
                    <p className="mb-4 text-lg">Không tìm thấy thông tin chi tiết.</p>
                    <button onClick={() => navigate('/')} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                        Quay lại trang chủ
                    </button>
                </div>
            </div>
        );
    }
    const { timestamp, name, isPurchased, amount, image } = detail;

    

    return (
        <div className="container mx-auto min-h-150 bg-gray-100 py-8 px-6 ">
            <h1 className="text-2xl font-bold text-center mb-8 text-blue-800">Chi tiết vi phạm</h1>
            <div className="p-10 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <p><strong>Họ tên:</strong> {name}</p>
                        {/* <p><strong>Tuổi:</strong> {detail.age}</p> */}
                        {/* <p><strong>Quê quán:</strong> {detail.hometown}</p> */}
                    </div>
                    <div>
                        <p><strong>Ngày phạm lỗi:</strong> {timestamp}</p>
                        <p><strong>Số tiền phạt:</strong> {amount}</p>
                        <p>
                            <strong>Trạng thái thanh toán:</strong>{' '}
                            <span className={isPurchased ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                                {isPurchased ? 'Đã thanh toán' : 'Chưa thanh toán'}
                            </span>
                        </p>
                    </div>
                </div>

                <div>
                    <p className="mb-2 font-semibold">Hình ảnh vi phạm:</p>
                    <img src={image} alt="Hình ảnh vi phạm" className="w-full rounded-md border border-gray-300"/>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
                    {!isPurchased && (
                        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition" onClick={() => alert('Chức năng thanh toán đang phát triển!')}>
                            Thanh toán
                        </button>
                    )}
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md transition" onClick={() => alert('Chức năng khiếu nại đang phát triển!')}>
                        Khiếu nại
                    </button>
                    <button className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-3 rounded-md transition" onClick={() => navigate('/')}>
                        Quay lại
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ViolationDetail;
