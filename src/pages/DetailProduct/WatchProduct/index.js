import styles from './WatchProduct.module.scss';
import classNames from 'classnames/bind';
import styled from 'styled-components';
import { useState } from 'react';

const cx = classNames.bind(styles);

const ColorButton = styled.button`
    background-color: ${(props) => props.color};
    width: 56px;
    height: 56px;
    border-radius: 100%;
    box-shadow: inset 0 3px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
`;

function WatchProduct() {
    const [currentPrice, setCurrentPrice] = useState('34.990.000₫'); // Màu sắc ban đầu

    const handlePriceChange = (newPrice) => {
        setCurrentPrice(newPrice);
    };

    const [imageURL, setImageURL] = useState(
        'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/7077/316008/s16/apple-watch-se-2023-vien-nhom-day-vai-xanh-den-tb-1-650x650.png',
    );
    const [currentColor, setCurrentColor] = useState('Titan xanh'); // Màu sắc ban đầu

    const handleColorChange = (newColor, newImage) => {
        setCurrentColor(newColor);
        setImageURL(newImage);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner-wrapper')}>
                <div className={cx('img-product')}>
                    <img src={imageURL} alt="image iphone" />
                </div>
                <div className={cx('detail-product')}>
                    <h1 className={cx('title-product')}>Apple Watch SE 2023 GPS 40mm Sport Loop</h1>
                    <p className={cx('ready-product')}>Còn hàng</p>
                    <p className={cx('price-product')}>{currentPrice}</p>
                    <p className={cx('title-local-product')}>Dung lượng</p>
                    <div className={cx('local-product')}>
                        <button className={cx('btn-local-product')} onClick={() => handlePriceChange('34.990.000₫')}>
                            256GB
                        </button>
                        <button className={cx('btn-local-product')} onClick={() => handlePriceChange('39.990.000₫')}>
                            512GB
                        </button>
                        <button className={cx('btn-local-product')} onClick={() => handlePriceChange('46.990.000₫')}>
                            1TB
                        </button>
                    </div>
                    <p className={cx('title-color-product')}>Màu: {currentColor} </p>
                    <div className={cx('color-product')}>
                        <ColorButton
                            color="#4f5765"
                            onClick={() =>
                                handleColorChange(
                                    'Titan xanh',
                                    'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/7077/316008/s16/apple-watch-se-2023-vien-nhom-day-vai-xanh-den-tb-1-650x650.png',
                                )
                            }
                        ></ColorButton>
                        <ColorButton
                            color="#f2f1ec"
                            onClick={() =>
                                handleColorChange(
                                    'Titan trắng',
                                    'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/7077/316008/s16/apple-watch-se-2023-vien-nhom-day-vai-trang-tb-650x650.png',
                                )
                            }
                        ></ColorButton>
                    </div>
                    <img
                        className={cx('img-policy-product')}
                        src="https://cdn.tgdd.vn/2023/10/banner/Frame-482029--1--920x230.png"
                        alt="img-policy"
                    />
                    <div className={cx('polyci-product')}>
                        <ul className={cx('list-polyci-product')}>
                            <li className={cx('item-polyci-product')}>
                                <a href="/">Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Type C</a>
                            </li>
                            <li className={cx('item-polyci-product')}>
                                <a href="/">Hư gì đổi nấy 12 tháng tại 3453 siêu thị trên toàn quốc</a>
                            </li>
                            <li className={cx('item-polyci-product')}>
                                <a href="/">Bảo hành chính hãng 1 năm</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WatchProduct;
