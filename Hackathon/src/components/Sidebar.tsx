import React from 'react';
import styles from './styles/Sidebar.module.scss';

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <ul>
        <li><a href="#">Tất cả sản phẩm </a></li>
        <li><a href="#">Thiết bị điện tử</a></li>
        <li><a href="#">Sách</a></li>
        <li><a href="#">Đồ gia dụng</a></li>
        <li><a href="#">Thời trang</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
