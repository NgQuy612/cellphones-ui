import styles from './Watch.module.scss';
import classNames from 'classnames/bind';
import { SliderData } from '~/components/Slider/SliderData';
import Slider from '~/components/Slider';
import Card from '~/components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);
function Watch() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('iner-wrapper')}>
                <Slider slides={SliderData} />
                <div className={cx('box-card')}>
                    <div className={cx('box-title-card')}>
                        <FontAwesomeIcon className={cx('icon-title-card')} icon={faApple} />
                        <h3 className={cx('title-card')}>Watch</h3>
                    </div>

                    <div className={cx('list-item-card')}>
                        <Card
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/7077/316009/s16/apple-watch-se-lte-2023-vien-nhom-day-silicone-xanh-den-tb-650x650.png"
                            title="Apple Watch SE 2023 GPS + Cellular 44mm Sport Band"
                            price="8.490.000₫"
                            hot
                        />
                        <Card
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/7077/316009/s16/apple-watch-se-lte-2023-vien-nhom-day-silicone-xanh-den-tb-650x650.png"
                            title="Apple Watch SE 2023 GPS + Cellular 44mm Sport Band"
                            price="8.490.000₫"
                        />
                        <Card
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/7077/316009/s16/apple-watch-se-lte-2023-vien-nhom-day-silicone-xanh-den-tb-650x650.png"
                            title="Apple Watch SE 2023 GPS + Cellular 44mm Sport Band"
                            price="8.490.000₫"
                        />
                        <Card
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/7077/316009/s16/apple-watch-se-lte-2023-vien-nhom-day-silicone-xanh-den-tb-650x650.png"
                            title="Apple Watch SE 2023 GPS + Cellular 44mm Sport Band"
                            price="8.490.000₫"
                        />
                        <Card
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/7077/316009/s16/apple-watch-se-lte-2023-vien-nhom-day-silicone-xanh-den-tb-650x650.png"
                            title="Apple Watch SE 2023 GPS + Cellular 44mm Sport Band"
                            price="8.490.000₫"
                        />
                        <Card
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/7077/316009/s16/apple-watch-se-lte-2023-vien-nhom-day-silicone-xanh-den-tb-650x650.png"
                            title="Apple Watch SE 2023 GPS + Cellular 44mm Sport Band"
                            price="8.490.000₫"
                        />
                        <Card
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/7077/316009/s16/apple-watch-se-lte-2023-vien-nhom-day-silicone-xanh-den-tb-650x650.png"
                            title="Apple Watch SE 2023 GPS + Cellular 44mm Sport Band"
                            price="8.490.000₫"
                        />
                        <Card
                            url="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/7077/316009/s16/apple-watch-se-lte-2023-vien-nhom-day-silicone-xanh-den-tb-650x650.png"
                            title="Apple Watch SE 2023 GPS + Cellular 44mm Sport Band"
                            price="8.490.000₫"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Watch;
