import styles from './LogoRegister.module.scss';
import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShopify } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function LogoRegister() {
    return (
        <div className={cx('header-logo-register')}>
            <div className={cx('header-logo-icon-register')}>
                <FontAwesomeIcon icon={faShopify} />
            </div>
            <div className={cx('header-logo-name-register')}>LaloShop</div>
        </div>
    );
}

export default LogoRegister;
