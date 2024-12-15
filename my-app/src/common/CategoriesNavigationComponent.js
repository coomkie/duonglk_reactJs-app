import React from 'react';
import './CSS/CategoriesNavigationComponent.css'
import config from '../config/configValue';
import CardComponent from '../common/CardComponent';
const CategoriesNavigationComponent = () => {
    return (
        <div class="main">
            <div className="categories-nav" style={{ backgroundColor: config.backgroundColors.secondary }}>
                <ul className="categories-list">
                    <li className="categories-item"     ><a href="#electronics">Electronics</a></li>
                    <li className="categories-item"><a href="#clothing">Clothing</a></li>
                    <li className="categories-item"><a href="#home-appliances">Home Appliances</a></li>
                    <li className="categories-item"><a href="#books">Books</a></li>
                    <li className="categories-item"><a href="#sports">Sports</a></li>
                    <li className="categories-item"><a href="#beauty">Beauty</a></li>
                </ul>
            </div>
        </div>
    );
};

export default CategoriesNavigationComponent;