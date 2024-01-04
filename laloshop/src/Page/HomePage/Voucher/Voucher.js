import classNames from 'classnames/bind';
import styles from './Voucher.module.scss';

const cx = classNames.bind(styles);

function Voucher() {
    return (
        <div className={cx('voucher')}>
            <div className={cx('voucher-list')}>
                <img
                    className={cx('voucher-item')}
                    src="https://cf.shopee.vn/file/sg-50009109-1df1ef8f2fe8581163bf7faf14f17a6c"
                    alt=""
                />
            </div>
        </div>
    );
}

export default Voucher;
