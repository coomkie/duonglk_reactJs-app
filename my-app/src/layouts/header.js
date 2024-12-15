import React from 'react';
import './CSS/header.css'
import skinImage from '../assets/images/skin.jpg';
import config from '../config/configValue';
import TextComponent from '../components/TextComponent';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <div class="nv-main">
                <div class="img-contain">
                    <img src={skinImage} alt='not found' />
                    <div style={{ color: config.colors.primary }}>Balls</div>
                </div>
                <div className='menu-item'>
                    <ul>
                        <li> <Link to='/home' style={{ color: config.colors.primary, textDecoration: config.textDecoration.none }}>Home</Link></li>
                        <li> <Link to='/shop' style={{ color: config.colors.primary, textDecoration: config.textDecoration.none }}>Shop</Link></li>
                        <li> <Link to='/service' style={{ color: config.colors.primary, textDecoration: config.textDecoration.none }}>Services</Link></li>
                        <li> <Link to='/login' style={{ color: config.colors.primary, textDecoration: config.textDecoration.none }}>Login</Link></li>
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Header;