import React from 'react';
import Product from '../components/Product';
import skinImage from '../assets/images/skin.jpg';
import Homepage from '../components/homepage';
import CategoriesNavigationComponent from '../common/CategoriesNavigationComponent';
import './CSS/shopPage.css'
const Store = () => {
    const productList = [
        {
            productName: 'Product A',
            productPrice: 100,
            productImage: skinImage,
            quantity: 10,
        },
        {
            productName: 'Product B',
            productPrice: 200,
            productImage: skinImage,
            quantity: 5,
        },
        {
            productName: 'Product C',
            productPrice: 300,
            productImage: skinImage,
            quantity: 8,
        }, {
            productName: 'Product D',
            productPrice: 300,
            productImage: skinImage,
            quantity: 8,
        }, {
            productName: 'Product E',
            productPrice: 300,
            productImage: skinImage,
            quantity: 8,
        }, {
            productName: 'Product F',
            productPrice: 300,
            productImage: skinImage,
            quantity: 8,
        }
    ];

    return (
        <div>
            <div class='main-flex'>
                <div class='flex-navbar'>
                    <CategoriesNavigationComponent />
                </div>
                <div class='flex-item'>
                    <h1 style={{ textAlign: 'center' }}>Store</h1>
                    <div className="product-list">
                        {productList.map((product) => (
                            <Product
                                productName={product.productName}
                                productPrice={product.productPrice}
                                productImage={product.productImage}
                                quantity={product.quantity}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Store;
