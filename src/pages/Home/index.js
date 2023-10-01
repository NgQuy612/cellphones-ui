import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { SliderData } from '~/components/Slider/SliderData';
import Slider from '~/components/Slider';

const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('top')}>
            <Slider slides={SliderData} />;<h1 className={cx()}>Home page</h1>
        </div>
    );
}

export default Home;
