import classNames from 'classnames/bind';
import styles from './NotificationPopper.module.scss';
const cx = classNames.bind(styles);

function NotificationPopper() {
    return (
        <div className={cx('notiPopper')}>
            <img
                className={cx('notiPopper-image')}
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/99e561e3944805a023e87a81d4869600.png"
                alt="anh"
            />
            <div className={cx('notiPopper-title')}>Đăng nhập để xem thông báo</div>
            <div>
                <button className={cx('notiPopper-btn')}>Đăng ký</button>
                <button className={cx('notiPopper-btn')}>Đăng nhập</button>
            </div>
        </div>
    );
}

export default NotificationPopper;
