import React from 'react';
import styles from './styles/Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Kindayma shop</div>
      <input type="text" placeholder="Search..." className={styles.search} />
      <div className={styles.links}>
        <a href="#">Giỏ hàng</a>
        <a href="#">Đăng nhập</a>
        <a href="#">Đăng kí</a>
      </div>
    </header>
  );
};

export default Header;
