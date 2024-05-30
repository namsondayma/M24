import React from 'react';
import ProductCard from './ProductCard';
import styles from './styles/ProductList.module.scss';

const products = [
  {
    name: "Iphone 6",
    price: "29.000.000đ",
    image:  "https://cdn.tgdd.vn/Products/Images/42/92962/iphone-6-32gb-gold-hh-600x600-600x600-600x600.jpg",
    location: "Hà Nội",
    sales: 30
  },
  {
    name: "Iphone 6 Plus",
    price: "3.000.000đ",
    image: "https://cdn.tgdd.vn/Products/Images/42/92962/iphone-6-32gb-gold-hh-600x600-600x600-600x600.jpg",
    location: "Hà Nội",
    sales: 500
  },
  {
    name: "Iphone 6",
    price: "29.000.000đ",
    image: "https://cdn.tgdd.vn/Products/Images/42/92962/iphone-6-32gb-gold-hh-600x600-600x600-600x600.jpg",
    location: "Hà Nội",
    sales: 30
  },
  {
    name: "Iphone 6",
    price: "29.000.000đ",
    image: "https://cdn.tgdd.vn/Products/Images/42/92962/iphone-6-32gb-gold-hh-600x600-600x600-600x600.jpg",
    location: "Hà Nội",
    sales: 30
  },
  {
    name: "Iphone 6",
    price: "29.000.000đ",
    image: "https://cdn.tgdd.vn/Products/Images/42/92962/iphone-6-32gb-gold-hh-600x600-600x600-600x600.jpg",
    location: "Hà Nội",
    sales: 30
  },
  <br/>
  
];

const ProductList: React.FC = () => {
  return (
    <div className={styles.productList}>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          price={product.price}
          image={product.image}
          location={product.location}
          sales={product.sales}
        />
      ))}
    </div>
  );
};

export default ProductList;
