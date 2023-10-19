import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import images from '~/assets/images';
import Search from '../../components/Search';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import HeadlessTippy from '@tippyjs/react/headless';
import './active.css';
import TippyItem from '~/components/TippyItem';
const cx = classNames.bind(styles);

function Header() {
    const [fallback, setFallback] = useState('');

    const [visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/wish_list') // Thay đổi URL thành đường dẫn API thực tế
            .then((response) => response.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setProduct(data);
                }
            })
            .catch((error) => console.error('Lỗi khi tải danh sách sản phẩm:', error));
    }, []);

    const handleError = () => {
        setFallback(images.noImage);
    };

    const removeWishlist = (id) => {
        fetch(`http://localhost:3000/wish_list/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                if (response.ok) {
                    // Xóa sản phẩm khỏi danh sách ở phía giao diện hoặc thực hiện các thao tác cần thiết khác.
                    console.log('Sản phẩm đã được xóa thành công.');
                } else {
                    console.error('Lỗi khi xóa sản phẩm khỏi REST API.');
                }
            })
            .catch((error) => {
                console.error('Lỗi kết nối: ', error);
            });
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to="/">
                        <img
                            src={
                                fallback ||
                                'https://themes.sikidodemo.com/demo-website/web22/uploads/source//logo/logo-(3).webp'
                            }
                            alt="logo"
                            onError={handleError}
                        />
                    </Link>

                    <Link to="/">
                        <img src={images.logoImage} alt="logoApple" />
                    </Link>
                </div>
                <Search />
                <div className={cx('category')}>
                    <NavLink className={cx('item')} to="/">
                        Home
                    </NavLink>
                    <NavLink className={cx('item')} to="/iphone">
                        Iphone
                    </NavLink>
                    <NavLink className={cx('item')} to="/ipad">
                        Ipad
                    </NavLink>
                    <NavLink className={cx('item')} to="/watch">
                        Watch
                    </NavLink>
                    <NavLink className={cx('item')} to="/mac">
                        Mac
                    </NavLink>
                </div>

                <HeadlessTippy
                    interactive
                    visible={visible}
                    onClickOutside={hide}
                    render={(attrs) => (
                        <div className={cx('wishList-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('wishList-title')}>Sản phẩm yêu thích</h4>
                                {product.map((item) => (
                                    <div key={item.id} onClick={visible ? hide : show}>
                                        <TippyItem product={item} removeWishlist={removeWishlist} wishList />
                                    </div>
                                ))}
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <button className={cx('wishList-btn')} onClick={visible ? hide : show}>
                        <FontAwesomeIcon className={cx('wishList-icon')} icon={faHeart} />
                    </button>
                </HeadlessTippy>
            </div>
        </header>
    );
}

export default Header;
