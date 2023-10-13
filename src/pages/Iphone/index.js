import styles from './Iphone.module.scss';
import classNames from 'classnames/bind';
import ModelPage from '~/components/ModelPage';

const cx = classNames.bind(styles);
function Iphone() {
    return <ModelPage namePage="Iphone" api="http://localhost:3000/iphone" />;
}

export default Iphone;
