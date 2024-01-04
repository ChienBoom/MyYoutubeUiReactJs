import classNames from 'classnames/bind';
import styles from './Event.module.scss';
import EventImage from './EventImage';
import EventNavbar from './EventNavbar';

const cx = classNames.bind(styles);

function Event() {
    return (
        <div className={cx('container-wrap')}>
            <div className={cx('grid')}>
                <EventImage />
                <EventNavbar />
            </div>
        </div>
    );
}

export default Event;
