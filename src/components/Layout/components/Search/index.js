import { useEffect, useState, useRef } from 'react';
import { faXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Search.module.scss';
import TippyItem from '~/components/TippyItem';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);
        fetch(`http://localhost:3000/data?q=${encodeURIComponent(searchValue)}`)
            .then(function (res) {
                if (res.status !== 200) {
                    console.log('Lỗi, mã lỗi ' + res.status);
                    return;
                }
                // parse response data
                res.json().then((data) => {
                    setSearchResult(data);
                    setLoading(false);
                });
            })
            .catch((err) => {
                console.log('Error :-S', err);
            });
    }, [searchValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Sản phẩm liên quan</h4>
                        {searchResult.map((result, index) => (
                            <div key={index} onClick={handleClear}>
                                <TippyItem product={result} />
                            </div>
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Nhập sản phẩm tìm kiếm"
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && !loading && (
                    <button className={cx('clear-btn')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                )}
            </div>
        </HeadlessTippy>
    );
}

export default Search;
