import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './DetailOrder.module.scss';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function DetailOrder() {
    const { id } = useParams();
    const [formData, setFormData] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3000/buy_product/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setFormData(data);
            })
            .catch((error) => console.error('Lỗi khi tải danh sách sản phẩm:', error));
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3000/buy_product/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success('Cập nhật thành công!', {
                    position: 'top-right',
                    autoClose: 3000,
                });
            }
        } catch (error) {
            toast.error('Không thành công!', {
                position: 'top-right',
                autoClose: 3000,
            });
        }
    };

    return (
        <div className={cx('wrapper')}>
            <ToastContainer />
            <h1 className={cx('title-wrapper')}>
                Chi Tiết Đơn Hàng <FontAwesomeIcon icon={faPenToSquare} />
            </h1>
            <div className={cx('inner-wrapper')}>
                <div>
                    <form className={cx('form-buy')} onSubmit={handleSubmit}>
                        <div>
                            <label className={cx('label-form-buy')}>Tên:</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <label className={cx('label-form-buy')}>Số điện thoại:</label>
                            <input
                                type="text"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <label className={cx('label-form-buy')}>Chọn trạng thái:</label>
                            <select name="status" value={formData.status} onChange={handleInputChange} required>
                                <option value="Processing">Processing</option>
                                <option value="Delivered">Delivered</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>
                        <div>
                            <label className={cx('label-form-buy')}>Email:</label>
                            <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
                        </div>
                        <div>
                            <label className={cx('label-form-buy')}>Địa chỉ:</label>
                            <input type="text" name="address" value={formData.address} onChange={handleInputChange} />
                        </div>
                        <button className={cx('btn-form-buy')} type="submit">
                            Lưu
                        </button>
                    </form>
                </div>
                <div className={cx('form-cus')}>
                    <h2 className={cx('title-cus')}>
                        Họ và tên: <br />
                        <span>{formData.name}</span>{' '}
                    </h2>
                    <p className={cx('text-cus')}>
                        Số điện thoại: <br />
                        <span>{formData.phoneNumber}</span>
                    </p>
                    <p className={cx('text-cus')}>
                        Trạng thái đơn hàng: <br />
                        <span>{formData.status}</span>
                    </p>
                    <p className={cx('text-cus')}>
                        Email: <br />
                        <span>{formData.email}</span>
                    </p>
                    <p className={cx('text-cus')}>
                        Địa chỉ: <br />
                        <span>{formData.address}</span>
                    </p>
                    <p className={cx('text-cus')}>
                        Thời gian: <br />
                        <span>{formData.date}</span>
                    </p>
                </div>
                <div className={cx('wrapper-module')}>
                    <div className={cx('inner-wrapper-module')}>
                        
                            <img  className={cx('img-product')} src={formData.image} alt="" />
                        
                        <div className={cx('detail-product')}>
                            <h1 className={cx('name-product')}>{formData.nameModel}</h1>
                            <p className={cx('price-product')}>{formData.price}</p>
                            <p className={cx('title-local-product')}>Dung lượng</p>
                            <div className={cx('btn-local-product')}>{formData.local}</div>
                            <p className={cx('title-color-product')}>Màu: {formData.color}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailOrder;
