import classNames from 'classnames/bind';
import styles from './ProductDetailPage.module.scss';

import ProductDetailImg from './ProductDetailImg';
import ProductDetailInfo from './ProductDetailInfo';
import ProductDetailSupplier from './ProductDetailSupplier';
import ProductDetailDescription from './ProductDetailDescription';

const cx = classNames.bind(styles);

function ProductDetailPage() {
    return (
        <div className={cx('grid')}>
            <div className={cx('wrapper')}>
                <div className={cx('wrapper-product')}>
                    <ProductDetailImg />
                    <ProductDetailInfo />
                </div>
                <div className={cx('supplier-info')}>
                    <ProductDetailSupplier />
                </div>
                <div className={cx('product-description')}>
                    <ProductDetailDescription />
                </div>
            </div>
        </div>
    );
}

export default ProductDetailPage;
