import classNames from 'classnames/bind';
import styles from './LoginPage.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function LoginPage() {
    return (
        <div className={cx('wrap-login-page')}>
            <div className={cx('login-from')}>
                <span className={cx('login-form-title')}>Đăng nhập</span>
                <input className={cx('login-form-input')} />
                {/* <span className={cx('login-form-message')}>Vui lòng điền thông tin</span> */}
                <input className={cx('login-form-input')} />
                {/* <span className={cx('login-form-message')}>Vui lòng điền thông tin</span> */}
                <button className={cx('login-form-btn')}>ĐĂNG NHẬP</button>
                <div className={cx('record-password')}>
                    <Link className={cx('record-password-link')}>
                        <span className={cx('record-password-title')}>Quên mật khẩu</span>
                    </Link>
                    <Link className={cx('record-password-link')}>
                        <span className={cx('record-password-title')}>Đăng nhập với SMS</span>
                    </Link>
                </div>
                <div className={cx('login-form-separate')}>
                    <div className={cx('login-form-separate-underlined')}></div>
                    <span className={cx('login-form-separate-title')}>HOẶC</span>
                    <div className={cx('login-form-separate-underlined')}></div>
                </div>
                <div className={cx('login-form-contact')}>
                    <button className={cx('login-form-contact-btn')}>Facebook</button>
                    <button className={cx('login-form-contact-btn')}>Google</button>
                </div>
                <span className={cx('login-form-title-policyAgreement')}>
                    Bằng việc đăng ký, bạn đã đồng ý với LaloShop về Điều khoản dịch vụ và Chính sách bảo mật
                </span>
                <div className={cx('login-from-help')}>
                    <span className={cx('login-from-help-title')}>Bạn mới biết đến LaloShop?</span>
                    <span className={cx('login-from-help-login')}>Đăng ký</span>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
