import classNames from 'classnames/bind';
import styles from './RegisterPage.module.scss';

const cx = classNames.bind(styles);

function LoginPage() {
    return (
        <div className={cx('wrap-register-page')}>
            <div className={cx('register-from')}>
                <span className={cx('register-form-title')}>Đăng ký</span>
                <input className={cx('register-form-input')} />
                <span className={cx('register-form-message')}>Số điện thoại không hợp lệ</span>
                <button className={cx('register-form-btn')}>TIẾP THEO</button>
                <div className={cx('register-form-separate')}>
                    <div className={cx('register-form-separate-underlined')}></div>
                    <span className={cx('register-form-separate-title')}>HOẶC</span>
                    <div className={cx('register-form-separate-underlined')}></div>
                </div>
                <div className={cx('register-form-contact')}>
                    <button className={cx('register-form-contact-btn')}>Facebook</button>
                    <button className={cx('register-form-contact-btn')}>Google</button>
                </div>
                <span className={cx('register-form-title-policyAgreement')}>
                    Bằng việc đăng ký, bạn đã đồng ý với LaloShop về Điều khoản dịch vụ và Chính sách bảo mật
                </span>
                <div className={cx('register-from-help')}>
                    <span className={cx('register-from-help-title')}>Bạn đã có tài khoản?</span>
                    <span className={cx('register-from-help-login')}>Đăng nhập</span>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
