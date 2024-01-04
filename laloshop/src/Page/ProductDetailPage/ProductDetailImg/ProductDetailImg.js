import classNames from 'classnames/bind';
import styles from './ProductDetailImg.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faFacebookMessenger, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function ProductDetailImg() {
    const lstProductImg = [
        {
            path: 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lq0drdzqklrp2e',
            name: '1',
        },
        {
            path: 'https://down-vn.img.susercontent.com/file/sg-11134201-7rbkt-lq0baxezn4iycd',
            name: '2',
        },
        {
            path: 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lq0drdzfkheg50',
            name: '3',
        },
        {
            path: 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lq0drdzflvywda',
            name: '4',
        },
        {
            path: 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lq0drdzfnajc4d',
            name: '5',
        },
    ];
    return (
        <div className={cx('product-img')}>
            <img
                className={cx('img-main')}
                src="https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lq0drdzfq3o852"
                alt="anh"
            />
            <div className={cx('lst-img-item')}>
                {lstProductImg.map((item, index) => (
                    <div key={index} className={cx('img-item')}>
                        <img className={cx('img-children')} src={item.path} alt="anh" />
                    </div>
                ))}
            </div>
            <div className={cx('share')}>
                <span className={cx('share-title')}>Chia sẻ:</span>
                <FontAwesomeIcon className={cx('share-icon', 'icon-messenger')} icon={faFacebookMessenger} />
                <FontAwesomeIcon className={cx('share-icon', 'icon-facebook')} icon={faFacebook} />
                <FontAwesomeIcon className={cx('share-icon', 'icon-pinterest')} icon={faPinterest} />
                <FontAwesomeIcon className={cx('share-icon', 'icon-twitter')} icon={faTwitter} />
            </div>
        </div>
    );
}

export default ProductDetailImg;
