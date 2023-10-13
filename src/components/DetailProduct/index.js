import styles from './DetailProduct.module.scss';
import classNames from 'classnames/bind';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

const ColorButton = styled.button`
    background-color: ${(props) => props.color};
    width: 56px;
    height: 56px;
    border-radius: 100%;
    box-shadow: inset 0 3px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
`;

function DetailProduct({ api }) {
    const [product, setProduct] = useState([]);
    const [detailedProducts, setDetailedProducts] = useState([]);

    useEffect(() => {
        // Sử dụng fetch để tải danh sách sản phẩm từ một API hoặc nguồn dữ liệu khác.
        fetch(api) // Thay đổi URL thành đường dẫn API thực tế
            .then((response) => response.json())
            .then((data) => setProduct(data))
            .catch((error) => console.error('Lỗi khi tải danh sách sản phẩm:', error));
    }, []);

    const localProduct = product.local_price;

    const [currentPrice, setCurrentPrice] = useState('34.990.000₫'); // Màu sắc ban đầu

    const handlePriceChange = (newPrice) => {
        setCurrentPrice(newPrice);
    };

    const [imageURL, setImageURL] = useState(
        'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-blue-thumbtz-650x650.png',
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
                    <h1 className={cx('title-product')}>{product.name}</h1>
                    <p className={cx('ready-product')}>{product.ready ? 'Còn hàng' : 'Hết hàng'}</p>
                    <p className={cx('price-product')}>{currentPrice}</p>
                    <p className={cx('title-local-product')}>Dung lượng</p>
                    <div className={cx('local-product')}>
                        {console.log(localProduct)}
                        {localProduct.map((item) => console.log(item.price))}
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
                                    'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-blue-thumbtz-650x650.png',
                                )
                            }
                        ></ColorButton>
                        <ColorButton
                            color="#bab4a9"
                            onClick={() =>
                                handleColorChange(
                                    'Titan vàng',
                                    'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305660/s16/iphone-15-pro-max-gold-thumbtz-650x650.png',
                                )
                            }
                        ></ColorButton>
                        <ColorButton
                            color="#464749"
                            onClick={() =>
                                handleColorChange(
                                    'Titan đen',
                                    'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305660/s16/iphone-15-pro-max-black-thumbtz-650x650.png',
                                )
                            }
                        ></ColorButton>
                        <ColorButton
                            color="#f2f1ec"
                            onClick={() =>
                                handleColorChange(
                                    'Titan trắng',
                                    'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305660/s16/iphone-15-pro-max-white-thumbtz-650x650.png',
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

export default DetailProduct;
