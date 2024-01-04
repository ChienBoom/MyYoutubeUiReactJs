import classNames from 'classnames/bind';
import styles from './ProductDetailPage.module.scss';

import ProductDetailImg from './ProductDetailImg';
import ProductDetailInfo from './ProductDetailInfo';

const cx = classNames.bind(styles);

function ProductDetailPage() {
    return (
        <div className={cx('grid')}>
            <div className={cx('wrapper')}>
                <ProductDetailImg />
                <ProductDetailInfo />
            </div>
        </div>
    );
}

export default ProductDetailPage;
