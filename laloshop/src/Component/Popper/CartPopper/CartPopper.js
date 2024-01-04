import classNames from 'classnames/bind';
import styles from './CartPopper.module.scss';

const cx = classNames.bind(styles);

function CartPopper() {
    return (
        <div className={cx('cartPopper')}>
            <img
                className={cx('cartPopper-image')}
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/99e561e3944805a023e87a81d4869600.png"
                alt="anh"
            />
            <div className={cx('cartPopper-title')}>Chưa có sản phẩm nào</div>
            <div>
                <button className={cx('cartPopper-btn')}>Đăng ký</button>
                <button className={cx('cartPopper-btn')}>Đăng nhập</button>
            </div>
        </div>
    );
}

export default CartPopper;
