import React from 'react';
import './CSS/HeaderComponent.css'
import skinImage from '../assets/images/skin.jpg';
import config from '../config/configValue';
const HeaderComponent = () => {
    return (
        <div>
            <div class="nv-main">
                <div class="img-contain">
                    <img src={skinImage} alt='not found' />
                    <div style={{ color: config.colors.primary }}>Balls</div>
                </div>
                <div className='menu-item'>
                    <ul>
                        <li>Home</li>
                        <li>Login</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HeaderComponent;