import styles from './CardSmall.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function CardSmall({ url, title }) {
    return (
        <div className={cx('item-category')}>
            <img className={cx('img-item-card')} src={url} alt="logo" />
            <p className={cx('name-item-card')}>{title}</p>
        </div>
    );
}

export default CardSmall;
