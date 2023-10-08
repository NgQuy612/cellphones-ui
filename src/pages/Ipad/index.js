import styles from './Ipad.module.scss';
import classNames from 'classnames/bind';
import { SliderData } from '~/components/Slider/SliderData';
import Slider from '~/components/Slider';
import Card from '~/components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);
function Ipad() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('iner-wrapper')}>
                <Slider slides={SliderData} />
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
                            title="iPad 9 WiFi 64GB"
                            price="7.890.000₫"
                        />
                        <Card
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/522/247517/s16/ipad-gen-9-silver-label-650x650.png"
                            title="iPad 9 WiFi 64GB"
                            price="7.890.000₫"
                        />
                        <Card
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/522/247517/s16/ipad-gen-9-silver-label-650x650.png"
                            title="iPad 9 WiFi 64GB"
                            price="7.890.000₫"
                        />
                        <Card
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/522/247517/s16/ipad-gen-9-silver-label-650x650.png"
                            title="iPad 9 WiFi 64GB"
                            price="7.890.000₫"
                        />
                        <Card
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/522/247517/s16/ipad-gen-9-silver-label-650x650.png"
                            title="iPad 9 WiFi 64GB"
                            price="7.890.000₫"
                        />
                        <Card
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/522/247517/s16/ipad-gen-9-silver-label-650x650.png"
                            title="iPad 9 WiFi 64GB"
                            price="7.890.000₫"
                        />
                        <Card
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/522/247517/s16/ipad-gen-9-silver-label-650x650.png"
                            title="iPad 9 WiFi 64GB"
                            price="7.890.000₫"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ipad;
