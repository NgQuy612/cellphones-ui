import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import images from '~/assets/images';
import Search from '../../components/Search';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import HeadlessTippy from '@tippyjs/react/headless';
import './active.css';
const cx = classNames.bind(styles);

function Header() {
    const [fallback, setFallback] = useState('');

    const [visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/data`)
            .then(function (res) {
                res.json().then((data) => {
                    console.log(data);
                    setSearchResult(data);
                });
            })
            .catch((err) => {
                console.log('Error :-S', err);
            });
    }, []);

    const handleError = () => {
        setFallback(images.noImage);
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
                    <NavLink className={cx('item')} to="/mac">
                        Mac
                    </NavLink>
                    <NavLink className={cx('item')} to="/contact">
                        Liên Hệ
                    </NavLink>
                </div>

                <HeadlessTippy
                    interactive
                    visible={visible}
                    onClickOutside={hide}
                    render={(attrs) => (
                        <div className={cx('wishList-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('wishList-title')}>Wish List</h4>
                                {searchResult.map((result) => (
                                    <AccountItem key={result.id} data={result} />
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
