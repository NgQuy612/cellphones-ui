import React, { useEffect, useState, useRef } from 'react';
import { SliderData } from './SliderData';
import styles from './Slider.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong, faRightLong } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

export default function Silder({ slides }) {
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className={cx('slider')}>
            <FontAwesomeIcon icon={faLeftLong} className={cx('left-arrow')} onClick={prevSlide} />
            <FontAwesomeIcon icon={faRightLong} className={cx('right-arrow')} onClick={nextSlide} />
            {SliderData.map((slide, index) => {
                return (
                    <div className={index === current ? cx('slide active') : cx('slide')} key={index}>
                        {index === current && (
                            <img
                                width={windowSize.innerWidth}
                                src={slide.image}
                                alt="travel image"
                                className={cx('image')}
                            />
                        )}
                    </div>
                );
            })}
        </section>
    );
}

function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}
