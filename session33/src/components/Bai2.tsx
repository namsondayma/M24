import { useState } from 'react';

function Bai2() {
    const [product, setProduct] = useState({
        id: 1,
        name: 'iphone100',
        price: 10000,
        quantity: 10
    });
    return (
        <div>
            <h1>Product Name: {product.name}</h1>
            <p>Product ID: {product.id}</p>
            <p>Product Price: {product.price}</p>
            <p>Product Quantity: {product.quantity}</p>
        </div>
    );
}
export default Bai2;