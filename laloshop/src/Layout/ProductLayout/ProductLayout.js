import styles from './ProductLayout.module.scss';
import classNames from 'classnames/bind';

import Header from '~/Layout/Component/Header';

const cx = classNames.bind(styles);

function ProductLayout({ children }) {
    return (
        <>
            <Header />
            <div className={cx('container')}>{children}</div>
        </>
    );
}

export default ProductLayout;
