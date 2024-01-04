import classNames from 'classnames/bind';
import styles from './HeaderRegister.module.scss';

import LogoRegister from '~/Layout/Component/HeaderRegister/LogoResgister';
import { Link } from 'react-router-dom';
import config from '~/Config';

const cx = classNames.bind(styles);

function HeaderRegister({ children }) {
    return (
        <div className={cx('grid')}>
            <div className={cx('wrap')}>
                <div className={cx('logo-title')}>
                    <Link className={cx('logo-link')} to={config.routes.home}>
                        <LogoRegister />
                    </Link>
                    <span className={cx('title')}>{children}</span>
                </div>
                <span className={cx('help-title')}>Bạn cần giúp đỡ?</span>
            </div>
        </div>
    );
}

export default HeaderRegister;
