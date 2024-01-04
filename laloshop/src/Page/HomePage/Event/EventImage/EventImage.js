import classNames from 'classnames/bind';
import styles from './EventImage.module.scss';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function EventImage() {
    const lstEventImg = [
        {
            path: 'https://cf.shopee.vn/file/vn-50009109-a86eb4d54f9a11cfec9e1aa06eadcf34_xxhdpi',
            name: '1',
        },
        {
            path: 'https://cf.shopee.vn/file/vn-50009109-3b4844af326ff3b9c1e1793d0dbda9f3_xxhdpi',
            name: '2',
        },
        {
            path: 'https://cf.shopee.vn/file/vn-50009109-d514e7e98711c4dc1e70b38311315c0e_xxhdpi',
            name: '3',
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((currentIndex) => (currentIndex + 1) % 3);
            console.log('anh so: ' + currentIndex);
        }, 3000);
        return () => clearInterval(intervalId);
    }, [currentIndex]);

    return (
        <>
            <div className={cx('event')}>
                <div>
                    <img className={cx('event-img')} src={lstEventImg[currentIndex].path} alt="" />
                </div>
                <div className={cx('event-item')}>
                    <img
                        className={cx('event-item-img')}
                        src="https://cf.shopee.vn/file/vn-50009109-a56646040b07b29e5f61ecc18224d197_xhdpi"
                        alt=""
                    />
                    <img
                        className={cx('event-item-img')}
                        src="https://cf.shopee.vn/file/vn-50009109-83c8db72957c10cee766a854a2abd5e6_xhdpi"
                        alt=""
                    />
                </div>
            </div>
        </>
    );
}

export default EventImage;
