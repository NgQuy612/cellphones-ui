import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { SliderData } from '~/components/Slider/SliderData';
import Slider from '~/components/Slider';
import CardItem from '~/components/CardItem';

const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('iner-wrapper')}>
                <Slider slides={SliderData} />

                <div className={cx('box-category')}>
                    <h3 className={cx('title-category')}>Iphone</h3>
                    <div className={cx('list-item-category')}>
                        <CardItem
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/522/247517/s16/ipad-gen-9-silver-label-650x650.png"
                            title="Iphone"
                            price="2.000"
                            small="true"
                        />
                        <CardItem
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/522/247517/s16/ipad-gen-9-silver-label-650x650.png"
                            title="Iphone"
                            price="2.000"
                        />
                        <CardItem
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/522/247517/s16/ipad-gen-9-silver-label-650x650.png"
                            title="Iphone"
                            price="2.000"
                        />
                        <CardItem
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/522/247517/s16/ipad-gen-9-silver-label-650x650.png"
                            title="Iphone"
                            price="2.000"
                        />
                    </div>
                </div>

                <div className={cx('box-category')}>
                    <h3 className={cx('title-category')}>Iphone</h3>
                    <div className={cx('list-item-category')}>
                        <CardItem
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/522/247517/s16/ipad-gen-9-silver-label-650x650.png"
                            title="iPad 9 WiFi 64GB"
                            price="7.890.000₫"
                        />
                        <CardItem
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/522/247517/s16/ipad-gen-9-silver-label-650x650.png"
                            title="Iphone"
                            price="2.000"
                        />
                        <CardItem
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/522/247517/s16/ipad-gen-9-silver-label-650x650.png"
                            title="Iphone"
                            price="2.000"
                        />
                        <CardItem
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/522/247517/s16/ipad-gen-9-silver-label-650x650.png"
                            title="Iphone"
                            price="2.000"
                        />
                    </div>
                </div>
                <div className={cx('box-category')}>
                    <h3 className={cx('title-category')}>Ipad</h3>
                    <div className={cx('list-item-category')}>
                        <CardItem
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/522/247517/s16/ipad-gen-9-silver-label-650x650.png"
                            title="iPad 9 WiFi 64GB"
                            price="7.890.000₫"
                        />
                        <CardItem
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/522/247517/s16/ipad-gen-9-silver-label-650x650.png"
                            title="Iphone"
                            price="2.000"
                        />
                        <CardItem
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/522/247517/s16/ipad-gen-9-silver-label-650x650.png"
                            title="Iphone"
                            price="2.000"
                        />
                        <CardItem
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/522/247517/s16/ipad-gen-9-silver-label-650x650.png"
                            title="Iphone"
                            price="2.000"
                        />
                    </div>
                </div>
                <div className={cx('box-category')}>
                    <h3 className={cx('title-category')}>Mac</h3>
                    <div className={cx('list-item-category')}>
                        <CardItem
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/44/231244/s16/mac-air-13-m1-xam-650x650.png"
                            title="MacBook Air 13 inch M1 2020 8CPU/8GB/256GB/7GPU"
                            price="19.490.000₫"
                        />
                        <CardItem
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/44/231244/s16/mac-air-13-m1-xam-650x650.png"
                            title="MacBook Air 13 inch M1 2020 8CPU/8GB/256GB/7GPU"
                            price="19.490.000₫"
                        />
                        <CardItem
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/44/231244/s16/mac-air-13-m1-xam-650x650.png"
                            title="MacBook Air 13 inch M1 2020 8CPU/8GB/256GB/7GPU"
                            price="19.490.000₫"
                        />
                        <CardItem
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
