import styles from './DetailProduct.module.scss';
import classNames from 'classnames/bind';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

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
    const [currentLocal, setCurrentLocal] = useState('256GB');
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
                setCurrentLocal(data.local_price[0].local);
                setImageURL(data.color_url[0].url);
                setCurrentColor(data.color_url[0].name_color);
            })
            .catch((error) => console.error('Lỗi khi tải danh sách sản phẩm:', error));
    }, [id, typeModel]);

    const [activeButton, setActiveButton] = useState(null);
    // Hàm xử lý khi nút được kích hoạt
    const handleButtonActivation = (index) => {
        setActiveButton(index);
    };

    const handleLocalChange = (newLocal, newPrice) => {
        setCurrentLocal(newLocal);
        setCurrentPrice(newPrice);
    };

    const handleColorChange = (newColor, newImage) => {
        setCurrentColor(newColor);
        setImageURL(newImage);
    };

    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        address: '',
        email: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const dataToSend = {
                name: formData.name,
                phoneNumber: formData.phoneNumber,
                address: formData.address,
                email: formData.email,
                nameModel: product.name,
                color: currentColor,
                local: currentLocal,
                price: currentPrice,
                image: imageURL,
                status: 'Processing',
            };

            const response = await fetch('http://localhost:3000/buy_product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend),
            });

            if (response.ok) {
                setShowForm(!showForm);
                toast.success('Mua hàng thành công!', {
                    position: 'top-right', // Vị trí hiển thị
                    autoClose: 3000, // Tự động đóng sau 3 giây
                });
            }
        } catch (error) {
            toast.error('Không thành công!', {
                position: 'top-right',
                autoClose: 3000,
            });
        }
    };

    return (
        <div className={cx('wrapper')}>
            <ToastContainer />
            <div className={cx('inner-wrapper')}>
                <div className={cx('img-product')}>
                    <img src={imageURL} alt="iphone" />
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
                                className={cx('btn-local-product', {
                                    active: index === activeButton,
                                })}
                                onClick={() => {
                                    handleLocalChange(`${item.local}`, `${item.price}`);
                                    handleButtonActivation(index);
                                }}
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
                    <div className={cx('box-form-buy')}>
                        <div className={cx('btn-show-form')} onClick={toggleForm}>
                            <p> Mua Ngay</p>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </div>
                        {showForm && (
                            <form className={cx('form-buy')} onSubmit={handleSubmit}>
                                <div>
                                    <label className={cx('label-form-buy')}>Tên:</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className={cx('label-form-buy')}>Số điện thoại:</label>
                                    <input
                                        type="text"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className={cx('label-form-buy')}>Email:</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div>
                                    <label className={cx('label-form-buy')}>Địa chỉ:</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <button className={cx('btn-form-buy')} type="submit">
                                    Đặt Hàng
                                </button>
                            </form>
                        )}
                    </div>

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
