import classNames from 'classnames/bind';
import styles from './RegisterLayout.module.scss';

import HeaderRegister from '../Component/HeaderRegister';

const cx = classNames.bind(styles);
function RegisterLayout({ children, title }) {
    return (
        <>
            <HeaderRegister children={title} />
            <div className={cx('container-register-layout')}>{children}</div>
        </>
    );
}

export default RegisterLayout;
