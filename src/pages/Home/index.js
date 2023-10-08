import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { SliderData } from '~/components/Slider/SliderData';
import Slider from '~/components/Slider';
import Card from '~/components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('iner-wrapper')}>
                <Slider slides={SliderData} />
                <div className={cx('box-card')}>
                    <div className={cx('list-item-card')}>
                        <Card
                            classname="item-category"
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/desktop/IP_Desktop.png"
                            title="Iphone"
                        />
                        <Card
                            classname="item-category"
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/desktop/IPad_Desktop.png"
                            title="Ipad"
                        />
                        <Card
                            classname="item-category"
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/desktop/Mac_Desktop.png"
                            title="Mac"
                        />
                        <Card
                            classname="item-category"
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/desktop/Watch_Desktop.png"
                            title="Watch"
                        />
                    </div>
                </div>
                <div className={cx('box-card')}>
                    <div className={cx('box-title-card')}>
                        <FontAwesomeIcon className={cx('icon-title-card')} icon={faApple} />
                        <h3 className={cx('title-card')}>Iphone</h3>
                    </div>

                    <div className={cx('list-item-card')}>
                        <Card
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/42/303832/s16/iphone-15-pro-blue-thumbtz-650x650.png"
                            title="iPhone 15 Pro 512GB"
                            price="37.590.000₫"
                        />
                        <Card
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/42/303832/s16/iphone-15-pro-blue-thumbtz-650x650.png"
                            title="iPhone 15 Pro 512GB"
                            price="37.590.000₫"
                        />
                        <Card
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/42/303832/s16/iphone-15-pro-blue-thumbtz-650x650.png"
                            title="iPhone 15 Pro 512GB"
                            price="37.590.000₫"
                        />
                        <Card
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/42/303832/s16/iphone-15-pro-blue-thumbtz-650x650.png"
                            title="iPhone 15 Pro 512GB"
                            price="37.590.000₫"
                        />
                    </div>
                </div>

                <div className={cx('box-card')}>
                    <div className={cx('box-title-card')}>
                        <FontAwesomeIcon className={cx('icon-title-card')} icon={faApple} />
                        <h3 className={cx('title-card')}>Ipad</h3>
                    </div>
                    <div className={cx('list-item-card')}>
                        <Card
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/522/247517/s16/ipad-gen-9-silver-label-650x650.png"
                            title="iPad 9 WiFi 64GB"
                            price="7.890.000₫"
                        />
                        <Card
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/522/247517/s16/ipad-gen-9-silver-label-650x650.png"
                            title="Iphone"
                            price="2.000"
                        />
                        <Card
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/522/247517/s16/ipad-gen-9-silver-label-650x650.png"
                            title="Iphone"
                            price="2.000"
                        />
                        <Card
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/522/247517/s16/ipad-gen-9-silver-label-650x650.png"
                            title="Iphone"
                            price="2.000"
                        />
                    </div>
                </div>
                <div className={cx('box-card')}>
                    <div className={cx('box-title-card')}>
                        <FontAwesomeIcon className={cx('icon-title-card')} icon={faApple} />
                        <h3 className={cx('title-card')}>Watch</h3>
                    </div>
                    <div className={cx('list-item-card')}>
                        <Card
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/522/247517/s16/ipad-gen-9-silver-label-650x650.png"
                            title="iPad 9 WiFi 64GB"
                            price="7.890.000₫"
                        />
                        <Card
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/522/247517/s16/ipad-gen-9-silver-label-650x650.png"
                            title="Iphone"
                            price="2.000"
                        />
                        <Card
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/522/247517/s16/ipad-gen-9-silver-label-650x650.png"
                            title="Iphone"
                            price="2.000"
                        />
                        <Card
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/522/247517/s16/ipad-gen-9-silver-label-650x650.png"
                            title="Iphone"
                            price="2.000"
                        />
                    </div>
                </div>
                <div className={cx('box-card')}>
                    <div className={cx('box-title-card')}>
                        <FontAwesomeIcon className={cx('icon-title-card')} icon={faApple} />
                        <h3 className={cx('title-card')}>Mac</h3>
                    </div>
                    <div className={cx('list-item-card')}>
                        <Card
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/44/231244/s16/mac-air-13-m1-xam-650x650.png"
                            title="MacBook Air 13 inch M1 2020 8CPU/8GB/256GB/7GPU"
                            price="19.490.000₫"
                        />
                        <Card
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/44/231244/s16/mac-air-13-m1-xam-650x650.png"
                            title="MacBook Air 13 inch M1 2020 8CPU/8GB/256GB/7GPU"
                            price="19.490.000₫"
                        />
                        <Card
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/44/231244/s16/mac-air-13-m1-xam-650x650.png"
                            title="MacBook Air 13 inch M1 2020 8CPU/8GB/256GB/7GPU"
                            price="19.490.000₫"
                        />
                        <Card
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
