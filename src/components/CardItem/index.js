import styles from './CardItem.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function CardItem({ to = '/', url, title, price, small }) {
    return (
        <Link to={to} className={cx('link-item-category')}>
            <div className={cx('item-category')}>
                {small ? (
                    <img className={cx('img-item-category small')} src={url} alt="logo" />
                ) : (
                    <img className={cx('img-item-category')} src={url} alt="logo" />
                )}

                <p className={cx('name-item-category')}>{title}</p>
                {price ? <p className={cx('price-item-category')}>{price}</p> : <></>}
            </div>
        </Link>
    );
}

export default CardItem;
