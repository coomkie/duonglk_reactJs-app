import React from 'react';
import './CSS/product.css'
const Product = ({ productName, productPrice, productImage, quantity }) => {
    return (
        <div className="product">
            <img src={productImage} alt='404' className="product-image" />
            <h2 className="product-name">{productName}</h2>
            <p className="product-price">Price: ${productPrice}</p>
            <p className="product-quantity">Quantity: {quantity}</p>
        </div>
    );
};

export default Product;