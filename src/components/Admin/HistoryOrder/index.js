import styles from './HistoryOrder.module.scss';
import classNames from 'classnames/bind';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function HistoryOrder() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/buy_product')
            .then((response) => response.json())
            .then((data) => {
                setOrders(data);
            })
            .catch((error) => {
                console.error('Lỗi khi tải danh sách sản phẩm:', error);
            });
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('iner-wrapper')}>
                <h3 className={cx('title-wrapper')}>Đơn hàng đã hoàn thành</h3>
                <ul>
                    {orders.map((order) => (
                        <li key={order.id}>
                            {order.status === 'Completed' ? (
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
                                            <p>{order.email}</p>
                                            <p>{order.address}</p>
                                        </div>
                                        <div className={cx('box-status')}>
                                            <button className={cx('btn-status')}>{order.status}</button>
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
export default HistoryOrder;
