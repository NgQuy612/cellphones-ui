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
        fetch(api) 
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Lỗi khi tải danh sách sản phẩm:', error));
    }, [api]);

    const addToWishlist = (data) => {
        fetch('http://localhost:3000/wish_list', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data), 
        })
            .then((response) => {
                if (response.ok) {
                    console.log('Thêm sản phẩm thành công');
                }
            })
            .catch((error) => {
                console.error('Lỗi kết nối: ', error);
            });
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('iner-wrapper')}>
                <Slider slides={SliderData} />
                <div className={cx('box-card')}>
                    <div className={cx('box-title-card')}>
                        <FontAwesomeIcon className={cx('icon-title-card')} icon={faApple} />
                        <h3 className={cx('title-card')}>{namePage}</h3>
                    </div>

                    <div className={cx('list-item-card')}>
                        {products.map((product) => (
                            <Card
                                key={product.id}
                                to={product.to} ///iphone/detail-iphone/1
                                url={product.color_url[0].url}
                                title={product.name}
                                price={product.local_price[0].price}
                                hot={product.hot ? true : false}
                                product={product}
                                addToWishlist={addToWishlist}
                            ></Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModelPage;
