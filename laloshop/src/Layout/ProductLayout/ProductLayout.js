import styles from './ProductLayout.module.scss';
import classNames from 'classnames/bind';

import Header from '~/Layout/Component/Header';

const cx = classNames.bind(styles);

function ProductLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>{children}</div>
        </div>
    );
}

export default ProductLayout;
