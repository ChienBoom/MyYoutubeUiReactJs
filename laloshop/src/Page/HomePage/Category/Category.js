import classNames from 'classnames/bind';
import styles from './Category.module.scss';

const cx = classNames.bind(styles);

function Category() {
    const lstCategory = [
        {
            path: 'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn',
            title: 'Thởi Trang Nam',
        },
        {
            path: 'https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca_tn',
            title: 'Điện thoại & phụ kiện',
        },
        {
            path: 'https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5_tn',
            title: 'Thiết bị điện tử',
        },
        {
            path: 'https://down-vn.img.susercontent.com/file/c3f3edfaa9f6dafc4825b77d8449999d_tn',
            title: 'Máy tính & Laptop',
        },
        {
            path: 'https://down-vn.img.susercontent.com/file/ec14dd4fc238e676e43be2a911414d4d_tn',
            title: 'Máy ảnh & Máy quay phim',
        },
        {
            path: 'https://down-vn.img.susercontent.com/file/86c294aae72ca1db5f541790f7796260_tn',
            title: 'Đồng hồ',
        },
        {
            path: 'https://down-vn.img.susercontent.com/file/74ca517e1fa74dc4d974e5d03c3139de_tn',
            title: 'Giày dép nam',
        },
        {
            path: 'https://down-vn.img.susercontent.com/file/7abfbfee3c4844652b4a8245e473d857_tn',
            title: 'Thiết bị gia dụng',
        },
        {
            path: 'https://down-vn.img.susercontent.com/file/6cb7e633f8b63757463b676bd19a50e4_tn',
            title: 'Thể thao & du lịch',
        },
        {
            path: 'https://down-vn.img.susercontent.com/file/3fb459e3449905545701b418e8220334_tn',
            title: 'Ô tô & xe máy & xe đạp',
        },
        {
            path: 'https://down-vn.img.susercontent.com/file/75ea42f9eca124e9cb3cde744c060e4d_tn',
            title: 'Thởi Trang nữ',
        },
        {
            path: 'https://down-vn.img.susercontent.com/file/099edde1ab31df35bc255912bab54a5e_tn',
            title: 'Mẹ & bé',
        },
        {
            path: 'https://down-vn.img.susercontent.com/file/24b194a695ea59d384768b7b471d563f_tn',
            title: 'Nhà cửa & đời sống',
        },
        {
            path: 'https://down-vn.img.susercontent.com/file/ef1f336ecc6f97b790d5aae9916dcb72_tn',
            title: 'Sắc đẹp',
        },
        {
            path: 'https://down-vn.img.susercontent.com/file/49119e891a44fa135f5f6f5fd4cfc747_tn',
            title: 'Sức khỏe',
        },
        {
            path: 'https://down-vn.img.susercontent.com/file/48630b7c76a7b62bc070c9e227097847_tn',
            title: 'Giày dép nữ',
        },
        {
            path: 'https://down-vn.img.susercontent.com/file/fa6ada2555e8e51f369718bbc92ccc52_tn',
            title: 'Túi ví nữ',
        },
        {
            path: 'https://down-vn.img.susercontent.com/file/8e71245b9659ea72c1b4e737be5cf42e_tn',
            title: 'Phụ kiện & trang sức nữ',
        },
        {
            path: 'https://down-vn.img.susercontent.com/file/c432168ee788f903f1ea024487f2c889_tn',
            title: 'Bách hóa Online',
        },
        {
            path: 'https://down-vn.img.susercontent.com/file/36013311815c55d303b0e6c62d6a8139_tn',
            title: 'Nhà sách Online',
        },
    ];
    return (
        <div className={cx('category')}>
            <div className={cx('category-title')}>DANH MỤC</div>
            <div className={cx('category-list')}>
                {lstCategory.map((item, index) => (
                    <div key={index} className={cx('category-item')}>
                        <img className={cx('category-item-icon')} src={item.path} alt="img" />
                        <div className={cx('category-item-title')}>{item.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Category;
