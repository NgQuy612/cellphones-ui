import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import Search from '../../components/Search';
const cx = classNames.bind(styles);

function Header() {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(images.noImage);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to="/" className={cx('logo')}>
                    <img
                        src={
                            fallback ||
                            'https://themes.sikidodemo.com/demo-website/web22/uploads/source//logo/logo-(3).webp'
                        }
                        alt="logo"
                        onError={handleError}
                    />
                </Link>
                <Search />
                <div className={cx('category')}>
                    <Link className={cx('item-iphone')} to="/product">
                        Iphone
                    </Link>
                    <Link className={cx('item-ipad')} to="/product">
                        Ipad
                    </Link>
                    <Link className={cx('item-mac')} to="/product">
                        Mac
                    </Link>
                    <Link className={cx('item-ipad')} to="/product">
                        Liên Hệ
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
