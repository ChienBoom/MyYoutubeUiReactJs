import Event from './Event';
import Category from './Category';
import Sale from './Sale';
import Voucher from './Voucher';
import Product from './Product';
import classNames from 'classnames/bind';
import styles from './HomePage.module.scss';

const cx = classNames.bind(styles);

function HomePage() {
    return (
        <>
            <Event />
            <div className={cx('grid')}>
                <Category />
                <Sale />
                <Voucher />
                <Product />
            </div>
        </>
    );
}

export default HomePage;
