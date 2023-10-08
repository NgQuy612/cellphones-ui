import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to="/" className={cx('wrapper')}>
            <img className={cx('img_module')} src={data.img_module} alt={data.name_module} />
            <div className={cx('info')}>
                <span className={cx('name')}>{data.name_module}</span>
                <h4 className={cx('price')}>
                    <span>{data.price}</span>
                </h4>
                {data.hot ? <span className={cx('hot')}>Online giá rẻ</span> : <></>}
            </div>
        </Link>
    );
}

export default AccountItem;
