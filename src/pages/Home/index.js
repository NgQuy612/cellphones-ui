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
                            to="/iphone/detail-iphone/1"
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/153856/s16/iphone-11-white-thumbtz-650x650.png"
                            title="iPhone 11 64GB"
                            price="11.590.000₫"
                        />
                        <Card
                            to="/iphone/detail-iphone/2"
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/299033/s16/iphone-15-pro-blue-thumbtz-650x650.png"
                            title="iPhone 15 Pro"
                            price="27.990.000₫"
                            hot
                        />
                        <Card
                            to="/iphone/detail-iphone/3"
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/245545/s16/iphone-14-plus-gold-thumbtz-650x650.png"
                            title="iPhone 13 64GB"
                            price="21.590.000₫"
                            hot
                        />
                        <Card
                            to="/iphone/detail-iphone/4"
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/303891/s16/iphone-15-plus-blue-thumbtz-1-650x650.png"
                            title="iPhone 15 Plus"
                            price="22.590.000₫"
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
                            to="/ipad/detail-ipad/1"
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/522/295467/s16/iPad-Pro-M2-129-5G-sliver-thumb-label-650x650.png"
                            title="iPad Pro M2 12.9 inch WiFi Cellular 128GB"
                            price="32.950.000₫"
                        />
                        <Card
                            to="/ipad/detail-ipad/2"
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/522/295453/s16/ipad-gen-10-cellular-sliver-650x650.png"
                            title="iPad 10 WiFi + Cellular"
                            price="14.290.000₫"
                            hot
                        />
                        <Card
                            to="/ipad/detail-ipad/3"
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/522/274155/s16/air-5-m1-wifi-cellular-xanh-thumb-label-650x650.png"
                            title="iPad Air 5 WiFi + Cellular"
                            price="21.590.000₫"
                            hot
                        />
                        <Card
                            to="/ipad/detail-ipad/4"
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/522/295467/s16/iPad-Pro-M2-129-5G-sliver-thumb-label-650x650.png"
                            title="iPad Pro M2 12.9 inch WiFi Cellular 128GB"
                            price="32.090.000₫"
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
                            to="/watch/detail-watch/1"
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/7077/316015/s16/apple-watch-se-2023-vien-nhom-day-vai-xanh-den-tb-650x650.png"
                            title="Apple Watch SE 2023 GPS 40mm Sport Loop"
                            price="7.190.000₫"
                        />
                        <Card
                            to="/watch/detail-watch/2"
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/7077/316012/s16/apple-watch-se-2023-vien-nhom-day-silicone-xanh-den-tb-650x650.png"
                            title="Apple Watch SE 2023 GPS 44mm Sport Band"
                            price="7.190.000₫"
                            hot
                        />
                        <Card
                            to="/watch/detail-watch/3"
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/7077/316004/s16/apple-watch-se-lte-2023-vien-nhom-day-vai-trang-tb-1-650x650.png"
                            title="Apple Watch SE 2023 GPS + Cellular 40mm Sport Loop"
                            price="8.190.000₫"
                        />
                        <Card
                            to="/watch/detail-watch/1"
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/7077/316015/s16/apple-watch-se-2023-vien-nhom-day-vai-xanh-den-tb-650x650.png"
                            title="Apple Watch SE 2023 GPS 40mm Sport Loop"
                            price="7.190.000₫"
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
                            to="/mac/detail-mac/1"
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/44/309018/s16/mac-air-15-m2-starlight-650x650.png"
                            title="MacBook Air 15 inch M2 2023 8CPU - 10GPU"
                            price="32.090.000₫"
                        />
                        <Card
                            to="/mac/detail-mac/2"
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/44/302150/s16/mac-pro-16-m2-bac-650x650.png"
                            title="MacBook Pro 16 inch 2023 M2 Pro 12CPU - 19GPU"
                            price="32.090.000₫"
                            hot
                        />
                        <Card
                            to="/mac/detail-mac/3"
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/44/231244/s16/mac-air-13-m1-xam-650x650.png"
                            title="MacBook Air 13 inch M1 2020 8CPU - 7GPU"
                            price="19.490.000₫"
                            hot
                        />
                        <Card
                            to="/mac/detail-mac/1"
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/44/309018/s16/mac-air-15-m2-starlight-650x650.png"
                            title="MacBook Air 15 inch M2 2023 8CPU - 10GPU"
                            price="32.090.000₫"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
