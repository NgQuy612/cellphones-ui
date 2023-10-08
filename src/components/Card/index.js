import styles from './Card.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Card({ classname = 'item-card', to = '/', url, title, price, hot }) {
    return (
        <Link to={to} className={cx('link-item-card')}>
            <div className={cx(`${classname}`)}>
                <img className={cx('img-item-card')} src={url} alt="logo" />
                <p className={cx('name-item-card')}>{title}</p>
                {price ? <p className={cx('price-item-card')}>{price}</p> : <></>}
                {hot ? <p className={cx('hot-item-card')}>Online giá trẻ</p> : <></>}
            </div>
        </Link>
    );
}

export default Card;
