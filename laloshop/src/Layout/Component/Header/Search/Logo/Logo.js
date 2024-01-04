import styles from './Logo.module.scss';
import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShopify } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Logo() {
    return (
        <div className={cx('header-logo')}>
            <div className={cx('header-logo-icon')}>
                <FontAwesomeIcon icon={faShopify} />
            </div>
            <div className={cx('header-logo-name')}>LaloShop</div>
        </div>
    );
}

export default Logo;
