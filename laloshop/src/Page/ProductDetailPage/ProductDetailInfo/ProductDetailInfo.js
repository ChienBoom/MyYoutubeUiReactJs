import classNames from 'classnames/bind';
import styles from './ProductDetailInfo.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ProductDetailInfo() {
    return (
        <div className={cx('product-info')}>
            <span className={cx('product-name')}>
                SHUAI Máy Bay Không Người Lái Camera Kép 4K Full HD Chế Độ Cảm Biến Tránh Va Chạm Tự Động TWJ24100B0
                1Z240102
            </span>
            <div className={cx('product-evaluate')}>
                <div className={cx('product-evaluate-title')}>
                    <span>Chưa có đánh giá</span>
                    <span className={cx('product-evaluate-solid')}>0 đã bán</span>
                </div>
                <span className={cx('product-evaluate-report')}>Tố cáo</span>
            </div>
            <div className={cx('product-price')}>
                <div className={cx('product-price-title')}>399.000đ - 599.000đ</div>
                <div className={cx('product-price-discount')}>44% Giảm</div>
            </div>
            <div className={cx('product-voucher')}>
                <span className={cx('product-voucher-title')}>Mã giảm giá của shop</span>
                <div className={cx('product-voucher-list')}>
                    <span className={cx('product-voucher-item')}>2% giảm</span>
                    <span className={cx('product-voucher-item')}>3% giảm</span>
                    <span className={cx('product-voucher-item')}>5% giảm</span>
                </div>
            </div>
            <div className={cx('product-transport')}>
                <span className={cx('product-transport-title')}>Vận chuyển</span>
                <span className={cx('product-transport-free')}>Miễn phí vận chuyển</span>
            </div>
            <div className={cx('product-color')}>
                <span className={cx('product-color-title')}>Màu sắc</span>
                <div className={cx('product-color-list')}>
                    <div className={cx('product-color-item')}>Máy ảnh đơn đen</div>
                    <div className={cx('product-color-item')}>Máy ảnh kép đen</div>
                </div>
            </div>
            <div className={cx('product-number')}>
                <span className={cx('product-number-title')}>Số lượng</span>
                <input className={cx('product-number-input')} type="number" placeholder="5" />
                <span className={cx('product-number-inventory')}>3000 sản phẩm có sẵn</span>
            </div>
            <div className={cx('product-add')}>
                <button className={cx('product-add-btn')}>
                    <FontAwesomeIcon icon={faCartShopping} />
                    Thêm vào giỏ hàng
                </button>
                <button className={cx('product-add-btn')}>Mua ngay</button>
            </div>
        </div>
    );
}

export default ProductDetailInfo;
