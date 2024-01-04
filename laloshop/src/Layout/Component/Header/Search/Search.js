import styles from './Search.module.scss';
import classNames from 'classnames/bind';

import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logo from './Logo';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import CartPopper from '~/Component/Popper/CartPopper/CartPopper';
import SearchPopper from '~/Component/Popper/SearchPopper';
import { useEffect, useRef, useState } from 'react';
import useDebounce from '~/Hooks/useDebounce';

import * as SearchService from '~/Service/SearchService';

const cx = classNames.bind(styles);

function Search() {
    const [searchInput, setSearchInput] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const debounceValue = useDebounce(searchInput, 500);
    const inputRef = useRef();

    useEffect(() => {
        const FetchData = async () => {
            try {
                if (!debounceValue.trim()) {
                    setSearchResult([]);
                    return;
                }
                const response = await SearchService.search(debounceValue);
                setSearchResult([...response]);
            } catch (error) {}
        };
        FetchData();
    }, [debounceValue]);

    return (
        <div className={cx('grid')}>
            <div className={cx('header-search-wrap')}>
                <Logo />
                <div className={cx('header-search-input-wrap')}>
                    <HeadlessTippy
                        interactive={true}
                        arrow={true}
                        placement="bottom"
                        trigger="click"
                        render={() => <SearchPopper searchInput={searchInput} children={searchResult} />}
                    >
                        <input
                            ref={inputRef}
                            value={searchInput}
                            type="text"
                            className={cx('header-search-input')}
                            placeholder="Bao ship 0DD - Đăng ký ngay"
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                    </HeadlessTippy>
                    <button className={cx('header-search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <HeadlessTippy
                    interactive={true}
                    arrow={true}
                    placement="bottom"
                    trigger="mouseenter"
                    render={() => <CartPopper />}
                >
                    <div className={cx('header-search-cart')}>
                        <FontAwesomeIcon icon={faCartShopping} />
                    </div>
                </HeadlessTippy>
            </div>
        </div>
    );
}

export default Search;
