import styles from './HandelOrder.module.scss';
import classNames from 'classnames/bind';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function HandelOrder() {
    const [orders, setOrders] = useState([]);

    const fetchOrder = () => {
        fetch('http://localhost:3000/buy_product')
            .then((response) => response.json())
            .then((data) => {
                setOrders(data);
            })
            .catch((error) => {
                console.error('Lỗi khi tải danh sách sản phẩm:', error);
            });
    };

    useEffect(() => {
        fetchOrder();
    }, []);

    const StatusButton = styled.button`
        background-color: ${(props) => (props.status === 'Processing' ? 'green' : '#4267B2')};
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        width: 120px;
        cursor: pointer;
    `;

    const statusMap = {
        Processing: 'Delivered',
        Delivered: 'Completed',
    };

    const handleStatusUpdate = (orderId, currentStatus, e) => {
        e.preventDefault();
        // Xác định trạng thái tiếp theo bằng cách sử dụng ánh xạ
        const nextStatus = statusMap[currentStatus];

        if (nextStatus) {
            // Gửi yêu cầu API để cập nhật trạng thái
            fetch(`http://localhost:3000/buy_product/${orderId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status: nextStatus }),
            })
                .then((response) => {
                    if (response.ok) {
                        fetchOrder();
                    }
                })
                .catch((error) => {
                    console.error('Lỗi khi cập nhật trạng thái:', error);
                });
        }
    };

    const removeWishlist = (id, e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/buy_product/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                if (response.ok) {
                    fetchOrder();
                } else {
                    console.error('Lỗi khi xóa sản phẩm khỏi REST API.');
                }
            })
            .catch((error) => {
                console.error('Lỗi kết nối: ', error);
            });
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('iner-wrapper')}>
                <h3 className={cx('title-wrapper')}>Danh sách đơn hàng</h3>
                <ul>
                    {orders.map((order) => (
                        <li key={order.id}>
                            {order.status !== 'Completed' ? (
                                <Link className={cx('link-box-order')} to={`/buy_product/${order.id}`}>
                                    <div className={cx('box-order')}>
                                        <div className={cx('box-module')}>
                                            <img className={cx('img-detail-module')} src={order.image} alt="" />
                                            <div className={cx('box-detail-module')}>
                                                <h2>{order.nameModel}</h2>
                                                <p>{order.price}</p>
                                                <p>{order.local}</p>
                                                <p>{order.color}</p>
                                            </div>
                                        </div>
                                        <div className={cx('box-customer')}>
                                            <h2>{order.name}</h2>
                                            <p>{order.phoneNumber}</p>
                                            <p>{order.address}</p>
                                            <p>{order.date}</p>
                                        </div>
                                        <div className={cx('box-status')}>
                                            <StatusButton
                                                status={order.status}
                                                onClick={(e) => handleStatusUpdate(order.id, order.status, e)}
                                            >
                                                {order.status}
                                            </StatusButton>
                                            <button
                                                className={cx('clear-status')}
                                                onClick={(e) => removeWishlist(order.id, e)}
                                            >
                                                Xóa
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                            ) : (
                                <></>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default HandelOrder;
