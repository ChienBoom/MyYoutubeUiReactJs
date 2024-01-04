import classNames from 'classnames/bind';
import styles from './Language.module.scss';

const cx = classNames.bind(styles);

function LanguagePopper() {
    const lstLanguage = [
        {
            title: 'Tiếng Việt',
        },
        {
            title: 'Tiếng Anh',
        },
    ];

    return (
        <div className={cx('language-list')}>
            {lstLanguage.map((item, index) => (
                <div key={index} className={cx('language-item')}>
                    <span className={cx('language-item-title')}>{item.title}</span>
                </div>
            ))}
        </div>
    );
}

export default LanguagePopper;
