import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to="/">
                        <img
                            src={'https://themes.sikidodemo.com/demo-website/web22/uploads/source//logo/logo-(3).webp'}
                            alt="logo"
                        />
                    </Link>

                    <Link to="/">
                        <img src={images.logoImage} alt="logoApple" />
                    </Link>
                </div>
                <div className={cx('container')}>
                    <div className={cx('contact')}>
                        <h3 className={cx('title')}>Tổng đài</h3>
                        <ul className={cx('list-contact')}>
                            <li className={cx('item-contact')}>Mua hàng</li>
                            <li className={cx('item-contact')}>\Chính sách xử lý dữ liệu cá nhân</li>
                            <li className={cx('item-contact')}>\Chính sách xử lý dữ liệu cá nhân</li>
                            <li className={cx('item-contact')}>\Chính sách xử lý dữ liệu cá nhân</li>
                        </ul>
                    </div>
                    <div className={cx('contact')}>
                        <h3 className={cx('title')}>Tổng đài</h3>
                        <ul className={cx('list-contact')}>
                            <li className={cx('item-contact')}>Mua hàng</li>
                            <li className={cx('item-contact')}>\Chính sách xử lý dữ liệu cá nhân</li>
                            <li className={cx('item-contact')}>\Chính sách xử lý dữ liệu cá nhân</li>
                            <li className={cx('item-contact')}>\Chính sách xử lý dữ liệu cá nhân</li>
                        </ul>
                    </div>
                    <div className={cx('contact')}>
                        <h3 className={cx('title')}>Tổng đài</h3>
                        <ul className={cx('list-contact')}>
                            <li className={cx('item-contact')}>Mua hàng</li>
                            <li className={cx('item-contact')}>\Chính sách xử lý dữ liệu cá nhân</li>
                            <li className={cx('item-contact')}>\Chính sách xử lý dữ liệu cá nhân</li>
                            <li className={cx('item-contact')}>\Chính sách xử lý dữ liệu cá nhân</li>
                        </ul>
                    </div>
                    <div className={cx('contact')}>
                        <h3 className={cx('title')}>Tổng đài</h3>
                        <ul className={cx('list-contact')}>
                            <li className={cx('item-contact')}>Mua hàng</li>
                            <li className={cx('item-contact')}>\Chính sách xử lý dữ liệu cá nhân</li>
                            <li className={cx('item-contact')}>\Chính sách xử lý dữ liệu cá nhân</li>
                            <li className={cx('item-contact')}>\Chính sách xử lý dữ liệu cá nhân</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
