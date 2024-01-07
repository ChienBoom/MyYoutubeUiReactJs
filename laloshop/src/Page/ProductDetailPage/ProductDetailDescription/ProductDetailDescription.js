import classNames from 'classnames/bind';
import styles from './ProductDetailDescription.module.scss';

const cx = classNames.bind(styles);

function ProductDetailDescription() {
    const lstInfo = [
        {
            title: 'Danh mục',
            value: 'Thiết bị điện tử',
        },
        {
            title: 'Dung lượng',
            value: '256GB',
        },
        {
            title: 'Hạn bảo hành',
            value: '12 tháng',
        },
        {
            title: 'Dung lượng pin',
            value: '4880mAh',
        },
        {
            title: 'Số lượng khách hàng',
            value: '59',
        },
        {
            title: 'Số sản phẩm còn lại',
            value: '2812',
        },
        {
            title: 'Gửi từ',
            value: 'Hà Nội',
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>CHI TIẾT SẢN PHẨM</div>
            <div className={cx('lst-item')}>
                {lstInfo.map((item, index) => (
                    <div key={index} className={cx('item-info')}>
                        <span className={cx('item-info-title')}>{item.title}</span>
                        <span className={cx('item-info-value')}>{item.value}</span>
                    </div>
                ))}
            </div>
            <div className={cx('title')}>MÔ TẢ SẢN PHẨM</div>
            <span className={cx('lst-item')}>THÔNG TIN SẢN PHẨM</span>
        </div>
    );
}

export default ProductDetailDescription;
