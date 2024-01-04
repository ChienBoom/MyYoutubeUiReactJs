import classNames from 'classnames/bind';
import styles from './NavBar.module.scss';

import config from '~/Config';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBell, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';

import HeadlessTippy from '@tippyjs/react/headless';
// import Tippy from '@tippyjs/react';

import DownloadPopper from '~/Component/Popper/DownloadPopper';
import NotificationPopper from '~/Component/Popper/NotificationPopper';
import LanguagePopper from '~/Component/Popper/LanguagePopper';

const cx = classNames.bind(styles);

function NavBar() {
    return (
        <div className="grid">
            <nav className={cx('navbar')}>
                <ul className={cx('navbar-list')}>
                    <li className={cx('navbar-item', 'item-separate')}>Kênh người bán</li>
                    <li className={cx('navbar-item', 'item-separate')}>Trở thành người bán Shopee</li>
                    <HeadlessTippy
                        interactive={true}
                        trigger="mouseenter"
                        arrow={true}
                        placement="bottom"
                        delay={200}
                        render={() => <DownloadPopper />}
                    >
                        <li className={cx('navbar-item', 'item-separate')}>Tải ứng dụng</li>
                    </HeadlessTippy>
                    <li className={cx('navbar-item')}>Kết nối</li>
                    <li className={cx('navbar-item-icon')}>
                        <FontAwesomeIcon icon={faFacebook} />
                    </li>
                    <li className={cx('navbar-item-icon')}>
                        <FontAwesomeIcon icon={faInstagram} />
                    </li>
                </ul>
                <ul className={cx('navbar-list')}>
                    <li className={cx('navbar-item-icon')}>
                        <FontAwesomeIcon icon={faBell} />
                    </li>
                    <HeadlessTippy
                        interactive={true}
                        trigger="mouseenter"
                        arrow={true}
                        render={() => <NotificationPopper />}
                    >
                        <li className={cx('navbar-item')}>Thông báo</li>
                    </HeadlessTippy>
                    <li className={cx('navbar-item-icon')}>
                        <FontAwesomeIcon icon={faCircleQuestion} />
                    </li>
                    <li className={cx('navbar-item')}>
                        <Link className={cx('navbar-link')}>Hỗ trợ</Link>
                    </li>
                    <li className={cx('navbar-item-icon')}>
                        <FontAwesomeIcon icon={faGlobe} />
                    </li>
                    <HeadlessTippy
                        interactive={true}
                        trigger="mouseenter"
                        arrow={true}
                        render={() => <LanguagePopper />}
                    >
                        <li className={cx('navbar-item')}>Tiếng Việt</li>
                    </HeadlessTippy>
                    <li className={cx('navbar-item')}>
                        <Link
                            to={config.routes.register}
                            className={cx('navbar-link', 'navbar-link-bold', 'item-separate')}
                        >
                            Đăng ký
                        </Link>
                    </li>
                    <li className={cx('navbar-item')}>
                        <Link to={config.routes.login} className={cx('navbar-link', 'navbar-link-bold')}>
                            Đăng nhập
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
