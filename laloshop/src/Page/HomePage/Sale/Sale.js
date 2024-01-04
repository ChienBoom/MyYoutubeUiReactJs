import classNames from 'classnames/bind';
import styles from './Sale.module.scss';

const cx = classNames.bind(styles);

function Sale() {
    const lstSale = [
        {
            path: 'https://down-vn.img.susercontent.com/file/vn-11134601-7r98o-lliqfzgexqko56_tn',
            title: '329.000 đ',
            bar: 'ĐANG BÁN CHẠY',
        },
        {
            path: 'https://down-vn.img.susercontent.com/file/vn-11134601-7r98o-llip7mn1om9ic1_tn',
            title: '329.000 đ',
            bar: 'ĐANG BÁN CHẠY',
        },
        {
            path: 'https://down-vn.img.susercontent.com/file/vn-11134601-7r98o-lmsd9s4a310f18_tn',
            title: '329.000 đ',
            bar: 'ĐANG BÁN CHẠY',
        },
        {
            path: 'https://down-vn.img.susercontent.com/file/vn-11134601-7r98o-lncekfszxvui39_tn',
            title: '329.000 đ',
            bar: 'ĐANG BÁN CHẠY',
        },
        {
            path: 'https://down-vn.img.susercontent.com/file/vn-50009109-7e6fdeeaa871de606293798225f01ac2_tn',
            title: '329.000 đ',
            bar: 'ĐANG BÁN CHẠY',
        },
        {
            path: 'https://down-vn.img.susercontent.com/file/sg-11134201-7qvf8-lf596a6p8voz2f_tn',
            title: '329.000 đ',
            bar: 'ĐANG BÁN CHẠY',
        },
    ];

    return (
        <div className={cx('sale')}>
            <div className={cx('sale-title')}>FLASH SALE</div>
            <div className={cx('sale-list')}>
                {lstSale.map((item, index) => (
                    <div key={index} className={cx('sale-item')}>
                        <img className={cx('sale-item-img')} src={item.path} alt="anh" />
                        <span className={cx('sale-item-title')}>{item.title}</span>
                        <div className={cx('sale-item-bar')}>{item.bar}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sale;
