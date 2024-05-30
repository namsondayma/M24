import React from 'react';
import styles from './styles/ProductCard.module.scss';

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  location: string;
  sales: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image, location, sales }) => {
  return (
    <div className={styles.productCard}>
      <img src={image} alt={name} className={styles.productImage} />
      <div className={styles.productInfo}>
        <h3>{name}</h3>
        <p>{price}</p>
        <p>{location}</p>
        <p>{sales} sold</p>
      </div>
    </div>
  );
};

export default ProductCard;
