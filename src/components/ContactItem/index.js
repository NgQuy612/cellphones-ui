import styles from './ContacItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Contact() {
    return (
        <div className={cx('contact')}>
            <h3 className={cx('title')}>Tổng đài</h3>
            <ul className={cx('list-contact')}>
                <li className={cx('item-contact')}>Mua hàng</li>
                <li className={cx('item-contact')}>\Chính sách xử lý dữ liệu cá nhân</li>
                <li className={cx('item-contact')}>\Chính sách xử lý dữ liệu cá nhân</li>
                <li className={cx('item-contact')}>\Chính sách xử lý dữ liệu cá nhân</li>
            </ul>
        </div>
    );
}

export default Contact;
