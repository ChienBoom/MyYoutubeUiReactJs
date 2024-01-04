import classNames from 'classnames/bind';
import styles from './SearchPopper.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function SearchPopper({ searchInput, children }) {
    const lstSearchOutput = [...children];
    console.log('Day la mang: ' + lstSearchOutput);
    return (
        <div className={cx('searchPopper-wrap')}>
            <div className={cx('searchPopper-list')}>
                <div className={cx('searchPopper-item')}>
                    <FontAwesomeIcon className={cx('searchPopper-item-icon')} icon={faStore} />
                    <span className={cx('searchPopper-item-title')}>Tìm Shop "{searchInput}"</span>
                </div>
                {lstSearchOutput.map((item, index) => (
                    <div key={index} className={cx('searchPopper-item')}>
                        <span className={cx('searchPopper-item-title')}>{item.full_name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchPopper;
