import classNames from 'classnames/bind';
import styles from './ProductDetailSupplier.module.scss';

const cx = classNames.bind(styles);

function ProductDetailSupplier() {
    const lstSupplierInfo = [
        {
            title: 'Đánh giá',
            value: '3,3K',
        },
        {
            title: 'Tỷ lệ phản hồi',
            value: '96%',
        },
        {
            title: 'Tham gia',
            value: '7 tháng trước',
        },
        {
            title: 'Sản phẩm',
            value: '24',
        },
        {
            title: 'Thời gian phản hồi',
            value: 'Trong vài giờ',
        },
        {
            title: 'Người theo dõi',
            value: '6K',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('supplier-img-frame')}>
                <img
                    className={cx('supplier-img')}
                    src="https://down-vn.img.susercontent.com/file/sg-11134004-7qvfe-lhx3mhznj1wl11_tn"
                    alt="anh"
                />
            </div>
            <div className={cx('supplier-info')}>
                <div className={cx('supplier-name')}>Hộp đựng túi nhựa CR.Home</div>
                <div className={cx('supplier-online')}>Online 45 phút trước</div>
                <div className={cx('supplier-btn-lst')}>
                    <button className={cx('supplier-btn', 'supplier-btn-impo')}>Chat ngay</button>
                    <button className={cx('supplier-btn')}>Xem shop</button>
                </div>
            </div>
            <div className={cx('separate')}></div>
            <div className={cx('supplier-info-list')}>
                {lstSupplierInfo.map((item, index) => (
                    <div key={index} className={cx('supplier-info-item')}>
                        <span className={cx('supplier-info-item-title')}>{item.title}</span>
                        <span className={cx('supplier-info-item-value')}>{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductDetailSupplier;
