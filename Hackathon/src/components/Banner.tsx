import React from 'react';
import styles from './styles/Banner.module.scss';

const Banner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <img src="https://github.com/C4EJS100-TrinhQuocHai/shop-ban-hang/blob/master/images/banner/banner-1.jpg?raw=true" alt="" />
    </div>
  );
};

export default Banner;
