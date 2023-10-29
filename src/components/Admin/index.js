import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Admin.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { faHouseLock } from '@fortawesome/free-solid-svg-icons';
import HandelOrder from './HandelOrder';
import CreatProduct from './CreatProduct';
import HistoryOrder from './HistoryOrder';

const cx = classNames.bind(styles);
function Amin() {
    const [activeTab, setActiveTab] = useState('handel-order'); // Sử dụng state để theo dõi tab hiện tại

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className={cx('wrapper')}>
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
        </div>
    );
}

export default Amin;
