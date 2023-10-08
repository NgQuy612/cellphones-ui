import styles from './Iphone.module.scss';
import classNames from 'classnames/bind';
import { SliderData } from '~/components/Slider/SliderData';
import Slider from '~/components/Slider';
import Card from '~/components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);
function Iphone() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('iner-wrapper')}>
                <Slider slides={SliderData} />
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
            </div>
        </div>
    );
}

export default Iphone;
