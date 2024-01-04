import classNames from 'classnames/bind';
import styles from './DownloadPopper.module.scss';

// import HeadlessTippy from '@tippyjs/react/headless';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);
function DownloadPopper() {
    return (
        <div className={cx('downloadPopper')}>
            <img
                className={cx('download-image')}
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/d91264e165ed6facc6178994d5afae79.png"
                alt="anh"
            />
            <div className={cx('download-list')}>
                <div className={cx('download-item')}>
                    <FontAwesomeIcon className={cx('download-item-icon')} icon={faApple} />
                    <span className={cx('download-item-title')}>App Store</span>
                </div>
                <div className={cx('download-item')}>
                    <FontAwesomeIcon className={cx('download-item-icon')} icon={faGooglePlay} />
                    <span className={cx('download-item-title')}>CH Play</span>
                </div>
            </div>
        </div>
    );
}

export default DownloadPopper;
