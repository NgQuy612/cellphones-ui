import styles from './DetailProduct.module.scss';
import classNames from 'classnames/bind';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

const ColorButton = styled.button`
    background-color: ${(props) => props.color};
    margin-right: 18px;
    width: 56px;
    height: 56px;
    border-radius: 100%;
    box-shadow: inset 0 3px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
`;
//{ api } function DetailProduct({ api })
function DetailProduct({ typeModel }) {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [localPrice, setLocalPrice] = useState([]);
    const [colorUrl, setColorUrl] = useState([]);
    const [currentPrice, setCurrentPrice] = useState('000.000.000vnđ');
    const [imageURL, setImageURL] = useState(
        'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-blue-thumbtz-650x650.png',
    );
    const [currentColor, setCurrentColor] = useState('Không tìm thấy');
    useEffect(() => {
        fetch(`http://localhost:3000/${typeModel}/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setColorUrl(data.color_url);
                setLocalPrice(data.local_price);
                setProduct(data);
                setCurrentPrice(data.local_price[0].price);
                setImageURL(data.color_url[0].url);
                setCurrentColor(data.color_url[0].name_color);
            })
            .catch((error) => console.error('Lỗi khi tải danh sách sản phẩm:', error));
    }, []);

    const handlePriceChange = (newPrice) => {
        setCurrentPrice(newPrice);
    };

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
                        {localPrice.map((item, index) => (
                            <button
                                key={index}
                                className={cx('btn-local-product')}
                                onClick={() => handlePriceChange(`${item.price}`)}
                            >
                                {item.local}
                            </button>
                        ))}
                    </div>
                    <p className={cx('title-color-product')}>Màu: {currentColor} </p>
                    <div className={cx('color-product')}>
                        {colorUrl.map((item, index) => (
                            <ColorButton
                                key={index}
                                color={item.color}
                                onClick={() => handleColorChange(`${item.name_color}`, `${item.url}`)}
                            ></ColorButton>
                        ))}
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
