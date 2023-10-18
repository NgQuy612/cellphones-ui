import classNames from 'classnames/bind';
import styles from './WishItem.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Wish({ data }) {
    return (
        <Link to={data.to} className={cx('wrapper')}>
            <img className={cx('img_module')} src={data.url} alt={data.name} />
            <div className={cx('info')}>
                <span className={cx('name')}>{data.name}</span>
                <h4 className={cx('price')}>
                    <span>{data.price}</span>
                </h4>
                {data.hot ? <span className={cx('hot')}>Online giá rẻ</span> : <></>}
            </div>
        </Link>
    );
}

export default Wish;
