import styles from './HandelOrder.module.scss';
import classNames from 'classnames/bind';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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
    // useEffect(() => {
    //     fetch('http://localhost:3000/buy_product')
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setOrders(data);
    //         })
    //         .catch((error) => {
    //             console.error('Lỗi khi tải danh sách sản phẩm:', error);
    //         });
    // }, []);

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
        // Thêm các ánh xạ khác nếu cần
    };

    const handleStatusUpdate = (orderId, currentStatus) => {
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

    return (
        <div className={cx('wrapper')}>
            <div className={cx('iner-wrapper')}>
                <h3 className={cx('title-wrapper')}>Danh sách đơn hàng</h3>
                <ul>
                    {orders.map((order) => (
                        <li key={order.id}>
                            {order.status !== 'Completed' ? (
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
                                        <p>{order.email}</p>
                                        <p>{order.address}</p>
                                    </div>
                                    <div className={cx('box-status')}>
                                        <StatusButton
                                            status={order.status}
                                            onClick={() => handleStatusUpdate(order.id, order.status)}
                                        >
                                            {order.status}
                                        </StatusButton>
                                    </div>
                                </div>
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
