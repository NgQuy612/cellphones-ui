import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Admin.module.scss';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { faHouseLock } from '@fortawesome/free-solid-svg-icons';
import HandelOrder from './HandelOrder';
import CreatProduct from './CreatProduct';
import HistoryOrder from './HistoryOrder';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cx = classNames.bind(styles);
function Amin() {
    const [activeTab, setActiveTab] = useState('handel-order'); // Sử dụng state để theo dõi tab hiện tại

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/user')
            .then((response) => response.json())
            .then((data) => setUser(data))
            .catch((error) => console.error('Lỗi khi tải danh sách sản phẩm:', error));
    }, []);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [userCredentials, setUserCredentials] = useState({
        username: '',
        password: '',
    });

    const checkUser = () => {
        const isCorrect = user.some((obj) =>
            Object.keys(userCredentials).every((key) => obj.hasOwnProperty(key) && obj[key] === userCredentials[key]),
        );
        if (isCorrect) {
            toast.success(`Đăng nhập thành công`, {
                position: 'top-right', // Vị trí hiển thị
                autoClose: 3000, // Tự động đóng sau 3 giây
            });
        } else {
            toast.error(`Đăng nhập thất bại`, {
                position: 'top-right', // Vị trí hiển thị
                autoClose: 3000, // Tự động đóng sau 3 giây
            });
        }
        setIsLoggedIn(isCorrect);
    };

    return (
        <div className={cx('wrapper')}>
            <ToastContainer />
            {isLoggedIn ? (
                <div className={cx('iner-wrapper')}>
                    <a href="/admin" className={cx('title-wrapper')}>
                        <h1>
                            Trang Quản Lý <FontAwesomeIcon icon={faHouseLock} />
                        </h1>
                    </a>
                    <div className={cx('container')}>
                        <div className={cx('tabbar')}>
                            <div
                                className={cx(`tab ${activeTab === 'handel-order' ? 'active' : ''}`)}
                                onClick={() => handleTabClick('handel-order')}
                            >
                                <p>Quản lý đơn hàng</p>
                            </div>
                            <div
                                className={cx(`tab ${activeTab === 'history-order' ? 'active' : ''}`)}
                                onClick={() => handleTabClick('history-order')}
                            >
                                <p>Lịch sử đơn hàng</p>
                            </div>
                            <div
                                className={cx(`tab ${activeTab === 'creat-product' ? 'active' : ''}`)}
                                onClick={() => handleTabClick('creat-product')}
                            >
                                <p>Tạo sản phẩm mới</p>
                            </div>
                        </div>
                        <div className={cx('content')}>
                            {activeTab === 'handel-order' && <HandelOrder />}
                            {activeTab === 'history-order' && <HistoryOrder />}
                            {activeTab === 'creat-product' && <CreatProduct />}
                        </div>
                    </div>
                </div>
            ) : (
                <div className={cx('iner-wrapper')}>
                    <div className={cx('form-login')}>
                        <h2 className={cx('title-login')}>Đăng nhập</h2>
                        <label>User</label>
                        <input
                            type="text"
                            value={userCredentials.username}
                            onChange={(e) => setUserCredentials({ ...userCredentials, username: e.target.value })}
                        />

                        <label>Password</label>
                        <input
                            type="password"
                            value={userCredentials.password}
                            onChange={(e) => setUserCredentials({ ...userCredentials, password: e.target.value })}
                        />
                        <button className={cx('btn-login')} onClick={checkUser}>
                            Login
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Amin;
