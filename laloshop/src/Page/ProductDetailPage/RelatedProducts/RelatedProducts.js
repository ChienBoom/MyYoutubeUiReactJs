import classNames from 'classnames/bind';
import styles from './RelatedProducts.module.scss';

const cx = classNames.bind(styles);

function RelatedProducts() {
    const lsdProduct = [
        {
            path: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpjogpo3qy45b4_tn',
            title: 'Chuột không dây - Chuột M220 Không dây',
            price: '109.000 đ',
            note: 'Đã bán 19.8k',
        },
        {
            path: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lphirdhjsy0ld6_tn',
            title: 'Chuột không dây - Chuột M220 Không dây',
            price: '109.000 đ',
            note: 'Đã bán 19.8k',
        },
        {
            path: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpsatmicfvp35a_tn',
            title: 'Chuột không dây - Chuột M220 Không dây',
            price: '109.000 đ',
            note: 'Đã bán 19.8k',
        },
        {
            path: 'https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-lfxwe3nhmbygc8_tn',
            title: 'Chuột không dây - Chuột M220 Không dây',
            price: '109.000 đ',
            note: 'Đã bán 19.8k',
        },
        {
            path: 'https://down-vn.img.susercontent.com/file/sg-11134201-7rbn8-lo3bgn8lfsfc7d_tn',
            title: 'Chuột không dây - Chuột M220 Không dây',
            price: '109.000 đ',
            note: 'Đã bán 19.8k',
        },
        {
            path: 'https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lonlln84j80gf7_tn',
            title: 'Chuột không dây - Chuột M220 Không dây',
            price: '109.000 đ',
            note: 'Đã bán 19.8k',
        },
    ];
    return (
        <div>
            <span>CÁC SẢN PHẨM KHÁC CỦA SHOP</span>
            <div className={cx('product-list')}>
                {lsdProduct.map((item, index) => (
                    <Link className={cx('product-item-link')} to={config.routes.product}>
                        <div key={index} className={cx('product-item')}>
                            <img className={cx('product-item-img')} src={item.path} alt="" />
                            <div className={cx('product-item-title')}>{item.title}</div>
                            <div className={cx('product-item-info')}>
                                <div className={cx('product-item-price')}>{item.price}</div>
                                <div className={cx('product-item-note')}>{item.note}</div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default RelatedProducts;
