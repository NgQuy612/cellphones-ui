import classNames from 'classnames/bind';
import styles from './TippyItem.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function TippyItem({ product, removeWishlist, wishList }) {
    const handleClearClick = (e) => {
        e.preventDefault();
        removeWishlist(product.id); // Xử lý thêm sản phẩm vào wishlist
        //window.location.reload();
    };

    return (
        <Link to={product.to} className={cx('wrapper')}>
            <div className={cx('box_module')}>
                <img className={cx('img_module')} src={product.color_url[0].url} alt={product.name} />
                <div className={cx('info')}>
                    <span className={cx('name')}>{product.name}</span>
                    <h4 className={cx('price')}>
                        <span>{product.local_price[0].price}</span>
                    </h4>
                    {product.hot ? <span className={cx('hot')}>Online giá rẻ</span> : <></>}
                </div>
            </div>
            {wishList ? (
                <FontAwesomeIcon className={cx('btn-clear')} icon={faXmark} onClick={handleClearClick} />
            ) : (
                <></>
            )}
        </Link>
    );
}

export default TippyItem;
