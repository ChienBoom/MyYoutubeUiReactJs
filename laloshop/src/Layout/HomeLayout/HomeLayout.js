import Header from '~/Layout/Component/Header';
import classNames from 'classnames/bind';
import styles from './HomeLayout.module.scss';

const cx = classNames.bind(styles);
function HomeLayout({ children }) {
    return (
        <>
            <Header />
            <div className={cx('container')}>{children}</div>
        </>
    );
}

export default HomeLayout;
