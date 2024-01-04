import NavBar from '~/Layout/Component/Header/NavBar';
import Search from '~/Layout/Component/Header/Search';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('header')}>
            <NavBar />
            <Search />
        </header>
    );
}

export default Header;
