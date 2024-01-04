import styles from './EventNavbar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function EventNavbar() {
    const lstEventNav = [
        {
            path: 'https://cf.shopee.vn/file/e4a404283b3824c211c1549aedd28d5f_xhdpi',
            title: 'Khung giờ săn sale',
        },
        {
            path: 'https://cf.shopee.vn/file/a8d76bca057ba0b117dcf8e1ef068d16_xhdpi',
            title: 'Miễn phí Ship',
        },
        {
            path: 'https://cf.shopee.vn/file/vn-50009109-f6c34d719c3e4d33857371458e7a7059_xhdpi',
            title: 'Voucher Giảm đến 500.000Đ',
        },
        {
            path: 'https://cf.shopee.vn/file/vn-50009109-91399a1d3ed283d272b069fac5ca989c_xhdpi',
            title: 'Shopee Siêu rẻ',
        },
        {
            path: 'https://cf.shopee.vn/file/vn-50009109-8a387d78a7ad954ec489d3ef9abd60b4_xhdpi',
            title: 'Mã giảm giá',
        },
        {
            path: 'https://cf.shopee.vn/file/vn-50009109-852300c407c5e79bf5dc1854aa0cfeef_xhdpi',
            title: 'Hàng hiệu Outlet Giảm 50%',
        },
        {
            path: 'https://cf.shopee.vn/file/9df57ba80ca225e67c08a8a0d8cc7b85_xhdpi',
            title: 'Nạp thẻ, dịch vụ & Data',
        },
        {
            path: 'https://cf.shopee.vn/file/vn-50009109-fbc98cb6dcc514259ff797e1b63c5937_xhdpi',
            title: 'Nhận Free Voucher',
        },
        {
            path: 'https://cf.shopee.vn/file/a08ab28962514a626195ef0415411585_xhdpi',
            title: 'Hàng Quốc Tế',
        },
        {
            path: 'https://cf.shopee.vn/file/vn-50009109-1975fb1af4ae3c22878d04f6f440b6f9_xhdpi',
            title: 'Bắt Trend - Gía Sốc',
        },
    ];

    return (
        <div className={cx('event-navbar')}>
            {lstEventNav.map((item, index) => (
                <div key={index} className={cx('event-navbar-item')}>
                    <img className={cx('event-navbar-item-icon')} src={item.path} alt="anh" />
                    <span className={cx('event-navbar-item-title')}>{item.title}</span>
                </div>
            ))}
        </div>
    );
}

export default EventNavbar;
