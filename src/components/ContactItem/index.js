import styles from './ContacItem.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Contact({ title, items }) {
    return (
        <div className={cx('contact')}>
            <h3 className={cx('title')}>{title}</h3>
            <ul className={cx('list-contact')}>
                {items.map((item) => (
                    <li>
                        <Link to={item.to} className={cx('item-contact')}>
                            {item.value}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Contact;
