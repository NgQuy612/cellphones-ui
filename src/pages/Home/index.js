import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { SliderData } from '~/components/Slider/SliderData';
import Slider from '~/components/Slider';
import Card from '~/components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { Link, Element } from 'react-scroll';

const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('iner-wrapper')}>
                <Slider slides={SliderData} />
                <div className={cx('box-card')}>
                    <div className={cx('list-item-card')}>
                        <Link to="iphone" smooth={true} duration={500}>
                            <Card
                                classname="item-category"
                                url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/desktop/IP_Desktop.png"
                                title="Iphone"
                            />
                        </Link>
                        <Link to="ipad" smooth={true} duration={500}>
                            <Card
                                classname="item-category"
                                url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/desktop/IPad_Desktop.png"
                                title="Ipad"
                            />
                        </Link>
                        <Link to="mac" smooth={true} duration={500}>
                            <Card
                                classname="item-category"
                                url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/desktop/Mac_Desktop.png"
                                title="Mac"
                            />
                        </Link>
                        <Link to="watch" smooth={true} duration={500}>
                            <Card
                                classname="item-category"
                                url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/desktop/Watch_Desktop.png"
                                title="Watch"
                            />
                        </Link>
                    </div>
                </div>
                <Element name="iphone"></Element>
                <div className={cx('box-card')}>
                    <div className={cx('box-title-card')}>
                        <FontAwesomeIcon className={cx('icon-title-card')} icon={faApple} />
                        <h3 className={cx('title-card')}>Iphone</h3>
                    </div>

                    <div className={cx('list-item-card')}>
                        <Card
                            to="/iphone/detail-iphone"
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/42/303832/s16/iphone-15-pro-blue-thumbtz-650x650.png"
                            title="iPhone 15 Pro 512GB"
                            price="37.590.000₫"
                        />
                        <Card
                            to="/iphone/detail-iphone"
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/42/153856/s16/iphone-11-white-thumbtz-650x650.png"
                            title="iPhone 11 64GB"
                            price="10.190.000₫"
                            hot
                        />
                        <Card
                            to="/iphone/detail-iphone"
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/42/289663/s16/iphone-14-blue-thumbtz-650x650.png"
                            title="iPhone 14 256GB"
                            price="22.090.000₫"
                            hot
                        />
                        <Card
                            to="/iphone/detail-iphone"
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/42/281570/s16/iphone-15-green-thumbtz_0-650x650.png"
                            title="iPhone 15"
                            price="21.990.000₫"
                        />
                    </div>
                </div>

                <Element name="ipad"></Element>
                <div className={cx('box-card')}>
                    <div className={cx('box-title-card')}>
                        <FontAwesomeIcon className={cx('icon-title-card')} icon={faApple} />
                        <h3 className={cx('title-card')}>Ipad</h3>
                    </div>
                    <div className={cx('list-item-card')}>
                        <Card
                            to="/ipad/detail-ipad"
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/522/247517/s16/ipad-gen-9-silver-label-650x650.png"
                            title="iPad 9 WiFi 64GB"
                            price="7.890.000₫"
                        />
                        <Card
                            to="/ipad/detail-ipad"
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/522/295467/s16/iPad-Pro-M2-129-5G-grey-thumb-label-650x650.png"
                            title="iPad Pro M2 12.9 inch WiFi Cellular 128GB"
                            price="32.090.000₫"
                            hot
                        />
                        <Card
                            to="/ipad/detail-ipad"
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/522/295467/s16/iPad-Pro-M2-129-5G-grey-thumb-label-650x650.png"
                            title="iPad 10 WiFi + Cellular"
                            price="14.290.000₫"
                            hot
                        />
                        <Card
                            to="/ipad/detail-ipad"
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/522/274156/s16/air-5-m1-wifi-cellular-xanh-thumb-label-650x650.png"
                            title="iPad Air 5 WiFi + Cellular"
                            price="21.590.000₫"
                        />
                    </div>
                </div>

                <Element name="watch"></Element>
                <div className={cx('box-card')}>
                    <div className={cx('box-title-card')}>
                        <FontAwesomeIcon className={cx('icon-title-card')} icon={faApple} />
                        <h3 className={cx('title-card')}>Watch</h3>
                    </div>
                    <div className={cx('list-item-card')}>
                        <Card
                            to="/watch/detail-watch"
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/7077/316008/s16/apple-watch-se-2023-vien-nhom-day-vai-trang-tb-650x650.png"
                            title="Apple Watch SE 2023 GPS 40mm Sport Loop"
                            price="6.390.000₫"
                        />
                        <Card
                            to="/watch/detail-watch"
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/7077/316015/s16/apple-watch-se-2023-vien-nhom-day-vai-xanh-den-tb-650x650.png"
                            title="Apple Watch SE 2023 GPS 44mm Sport Loop"
                            price="7.190.000₫"
                            hot
                        />
                        <Card
                            to="/watch/detail-watch"
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/7077/316012/s16/apple-watch-se-2023-vien-nhom-day-silicone-xanh-den-tb-650x650.png"
                            title="Apple Watch SE 2023 GPS 44mm Sport Band"
                            price="6.390.000₫"
                        />
                        <Card
                            to="/watch/detail-watch"
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/7077/316004/s16/apple-watch-se-lte-2023-vien-nhom-day-vai-trang-tb-1-650x650.png"
                            title="Apple Watch SE 2023 GPS + Cellular 40mm Sport Loop"
                            price="8.190.000₫"
                            hot
                        />
                    </div>
                </div>

                <Element name="mac"></Element>
                <div className={cx('box-card')}>
                    <div className={cx('box-title-card')}>
                        <FontAwesomeIcon className={cx('icon-title-card')} icon={faApple} />
                        <h3 className={cx('title-card')}>Mac</h3>
                    </div>
                    <div className={cx('list-item-card')}>
                        <Card
                            to="/mac/detail-mac"
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/44/231244/s16/mac-air-13-m1-xam-650x650.png"
                            title="MacBook Air 13 inch M1 2020 8CPU/8GB/256GB/7GPU"
                            price="19.490.000₫"
                        />
                        <Card
                            to="/mac/detail-mac"
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/44/309018/s16/mac-air-15-m2-starlight-650x650.png"
                            title="MacBook Air 15 inch M2 2023 8CPU - 10GPU"
                            price="32.090.000₫"
                            hot
                        />
                        <Card
                            to="/mac/detail-mac"
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/44/302150/s16/mac-pro-16-m2-bac-650x650.png"
                            title="MacBook Pro 16 inch 2023 M2 Pro 12CPU - 19GPU"
                            price="19.490.000₫"
                            hot
                        />
                        <Card
                            to="/mac/detail-mac"
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/44/231244/s16/mac-air-13-m1-xam-650x650.png"
                            title="MacBook Air 13 inch M1 2020 8CPU/8GB/256GB/7GPU"
                            price="19.490.000₫"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
