import { faFacebook, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import ContactItem from '~/components/ContactItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                    <ContactItem
                        title="Tổng đài"
                        items={[
                            { value: 'Mua hàng: 1900.9696.42 (7:30 - 22:00)' },
                            { value: 'CSKH: 1900.9868.43 (8:00 - 21:30)', to: '/' },
                        ]}
                    />
                    <ContactItem
                        title="Hệ thống cửa hàng"
                        items={[
                            { value: 'Xem 99 cửa hàng', to: '/' },
                            { value: 'Nội quy cửa hàng', to: '/' },
                            { value: 'Chất lượng phục vụ', to: '/' },
                            { value: 'Chính sách bảo hành & đổi trả', to: '/' },
                        ]}
                    />
                    <ContactItem
                        title="Hỗ trợ khách hàng"
                        items={[
                            { value: 'Điều kiện giao dịch chung', to: '/' },
                            { value: 'Hướng dẫn mua hàng online', to: '/' },
                            { value: 'Chính sách giao hàng', to: '/' },
                            { value: 'Hướng dẫn thanh toán', to: '/' },
                        ]}
                    />
                    <ContactItem
                        title="Về thương hiệu TopZone"
                        items={[
                            { value: 'Tích điểm Quà tặng VIP', to: '/' },
                            { value: ' Bán hàng doanh nghiệp', to: '/' },
                            { value: ' Chính sách xử lý dữ liệu cá nhân', to: '/' },
                            { value: 'Giới thiệu', to: '/' },
                        ]}
                    />
                </div>
                <div className={cx('contact-social')}>
                    <p className={cx('title-social')}>Kết nối với chúng tôi</p>
                    <div className={cx('icon-social')}>
                        <Link to="/">
                            <FontAwesomeIcon icon={faFacebook} />
                        </Link>
                        <Link to="/">
                            <FontAwesomeIcon icon={faYoutube} />
                        </Link>
                        <Link to="/">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
