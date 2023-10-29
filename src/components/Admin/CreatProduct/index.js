import styles from './CreatProduct.module.scss';
import classNames from 'classnames/bind';

import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

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

function CreatProduct() {
    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        fetch(`http://localhost:3000/${selectedCategory}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const updateToValue = `/${selectedCategory}/detail-${selectedCategory}/${data.length + 1}`;
                console.log(updateToValue);
                setProduct({ ...product, category: selectedCategory, to: updateToValue });
            })
            .catch((error) => {
                console.error('Lỗi khi thực hiện yêu cầu:', error);
            });
    };

    const [product, setProduct] = useState({
        // Thay đổi giá trị này để tạo sản phẩm với ID phù hợp
        to: '',
        name: 'IPHONE',
        category: '',
        color_url: [
            {
                color: '#bab4a9',
                name_color: 'Titan vàng',
                url: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/299033/s16/iphone-15-pro-thumbtz-650x650.png',
            },
        ],
        local_price: [
            {
                local: '00GB',
                price: '0.000.000₫',
            },
        ],
        hot: false,
        ready: false,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (product.to === '') {
            toast.error('Lỗi chưa chọn giá trị danh mục');
            return;
        }

        try {
            const response = await fetch(`http://localhost:3000/${product.category}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            });

            if (response.ok) {
                toast.success(`Tạo sản phẩm ${product.name} thành công`, {
                    position: 'top-right', // Vị trí hiển thị
                    autoClose: 3000, // Tự động đóng sau 3 giây
                });
            }
        } catch (error) {
            console.error('Lỗi khi gửi dữ liệu:', error);
        }
    };

    const handleColorChange = (index, field, value) => {
        const updatedColors = [...product.color_url];
        updatedColors[index][field] = value;
        console.log(updatedColors);
        setProduct({ ...product, color_url: updatedColors });
    };

    const handleLocalPriceChange = (index, field, value) => {
        const updatedLocalPrices = [...product.local_price];
        updatedLocalPrices[index][field] = value;
        setProduct({ ...product, local_price: updatedLocalPrices });
    };

    return (
        <div className={cx('wrapper')}>
            <div>
                <ToastContainer />
                <form onSubmit={handleSubmit}>
                    <div className={cx('form-item')}>
                        <label>Danh mục sản phẩm:</label>
                        <select value={product.category} onChange={handleCategoryChange}>
                            <option disabled value="">
                                --Chọn Danh Mục--
                            </option>
                            <option value="iphone">Iphone</option>
                            <option value="ipad">Ipad</option>
                            <option value="mac">Mac</option>
                            <option value="watch">Watch</option>
                        </select>
                    </div>

                    <div className={cx('form-item')}>
                        <label>Tên sản phẩm:</label>
                        <input
                            type="text"
                            value={product.name}
                            onChange={(e) => setProduct({ ...product, name: e.target.value })}
                        />
                    </div>
                    <div className={cx('form-item')}>
                        <label>Màu sắc:</label>
                        {product.color_url.map((color, index) => (
                            <div key={index}>
                                <input
                                    type="text"
                                    placeholder="Mã màu"
                                    value={color.color}
                                    onChange={(e) => handleColorChange(index, 'color', e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="Tên màu sắc"
                                    value={color.name_color}
                                    onChange={(e) => handleColorChange(index, 'name_color', e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="Hình ảnh sản phẩm theo màu sắc"
                                    value={color.url}
                                    onChange={(e) => handleColorChange(index, 'url', e.target.value)}
                                />
                            </div>
                        ))}
                        <button
                            className={cx('btn-form')}
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                setProduct({
                                    ...product,
                                    color_url: [
                                        ...product.color_url,
                                        {
                                            color: product.color_url[product.color_url.length - 1].color,
                                            name_color: product.color_url[product.color_url.length - 1].name_color,
                                            url: product.color_url[product.color_url.length - 1].url,
                                        },
                                    ],
                                });
                            }}
                        >
                            Thêm màu sắc
                        </button>
                    </div>
                    <div className={cx('form-item')}>
                        <label>Dung lượng:</label>
                        {product.local_price.map((localPrice, index) => (
                            <div key={index}>
                                <input
                                    type="text"
                                    placeholder="Dung lượng"
                                    value={localPrice.local}
                                    onChange={(e) => handleLocalPriceChange(index, 'local', e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="Giá theo dung lượng"
                                    value={localPrice.price}
                                    onChange={(e) => handleLocalPriceChange(index, 'price', e.target.value)}
                                />
                            </div>
                        ))}
                        <button
                            className={cx('btn-form')}
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                setProduct({
                                    ...product,
                                    local_price: [
                                        ...product.local_price,
                                        {
                                            local: product.local_price[product.local_price.length - 1].local,
                                            price: product.local_price[product.local_price.length - 1].price,
                                        },
                                    ],
                                });
                            }}
                        >
                            Thêm dung lượng
                        </button>
                    </div>
                    <div className={cx('form-item')}>
                        <label>Sản phẩm HOT:</label>
                        <input
                            type="checkbox"
                            checked={product.hot}
                            onChange={(e) => setProduct({ ...product, hot: e.target.checked })}
                        />
                    </div>
                    <div className={cx('form-item')}>
                        <label>Còn hàng:</label>
                        <input
                            type="checkbox"
                            checked={product.ready}
                            onChange={(e) => setProduct({ ...product, ready: e.target.checked })}
                        />
                    </div>
                    <button className={cx('btn-submit')} type="submit">
                        Tạo sản phẩm
                    </button>
                </form>
            </div>
            <div className={cx('wrapper-module')}>
                <div className={cx('inner-wrapper-module')}>
                    <div className={cx('img-product')}>
                        <img src={product.color_url[product.color_url.length - 1].url} alt="" />
                    </div>
                    <div className={cx('detail-product')}>
                        <h1 className={cx('category-product')}>Danh mục: {product.category}</h1>
                        <h1 className={cx('name-product')}>{product.name}</h1>
                        <p className={cx('ready-product')}>{product.ready ? 'Còn hàng' : 'Hết hàng'}</p>
                        <p className={cx('hot-product')}>{product.hot ? 'Hot giá rẻ online' : 'Không chương trình'}</p>
                        <p className={cx('price-product')}>
                            {product.local_price[product.local_price.length - 1].price}
                        </p>
                        <p className={cx('title-local-product')}>Dung lượng</p>
                        <div className={cx('local-product')}>
                            {product.local_price.map((item, index) => (
                                <div key={index} className={cx('btn-local-product')}>
                                    {item.local}
                                </div>
                            ))}
                        </div>
                        <p className={cx('title-color-product')}>
                            Màu: {product.color_url[product.color_url.length - 1].name_color}{' '}
                        </p>
                        <div className={cx('color-product')}>
                            {product.color_url.map((item, index) => (
                                <ColorButton key={index} color={item.color}></ColorButton>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreatProduct;
