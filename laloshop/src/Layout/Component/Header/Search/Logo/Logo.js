import styles from './Logo.module.scss';
import classNames from 'classnames/bind';

import { Link } from 'react-router-dom';

import config from '~/Config';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShopify } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Logo() {
    return (
        <Link className={cx('header-logo-link')} to={config.routes.home}>
            <div className={cx('header-logo')}>
                <div className={cx('header-logo-icon')}>
                    <FontAwesomeIcon icon={faShopify} />
                </div>
                <div className={cx('header-logo-name')}>LaloShop</div>
            </div>
        </Link>
    );
}

export default Logo;
