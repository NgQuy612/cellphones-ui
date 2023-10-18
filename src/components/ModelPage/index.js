import styles from './ModelPage.module.scss';
import classNames from 'classnames/bind';
import { SliderData } from '~/components/Slider/SliderData';
import Slider from '~/components/Slider';
import Card from '~/components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);
function ModelPage({ namePage, api }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Sử dụng fetch để tải danh sách sản phẩm từ một API hoặc nguồn dữ liệu khác.
        fetch(api) // Thay đổi URL thành đường dẫn API thực tế
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Lỗi khi tải danh sách sản phẩm:', error));
    }, []);

    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/wish_list') // Thay đổi URL thành đường dẫn API thực tế
            .then((response) => response.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setWishlist(data);
                }
            })
            .catch((error) => console.error('Lỗi khi tải danh sách sản phẩm:', error));
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('iner-wrapper')}>
                <Slider slides={SliderData} />
                <div className={cx('box-card')}>
                    <div className={cx('box-title-card')}>
                        <FontAwesomeIcon className={cx('icon-title-card')} icon={faApple} />
                        <h3 className={cx('title-card')}>{namePage}</h3>
                    </div>
                    {wishlist.map((item) => console.log(item.data.id))}
                    <div className={cx('list-item-card')}>
                        {products.map((product) => (
                            <Card
                                heart
                                to={product.to}
                                url={product.url}
                                title={product.name}
                                price={product.price}
                                hot={product.hot ? true : false}
                                product={product}
                                // addToWishlist={addToWishlist}
                            ></Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModelPage;
