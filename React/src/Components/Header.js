import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

// Nav bar
const Header = () => {
    return (
        <nav className={styles.navbar}>
            <img src={"https://cdn.gymshark.com/images/branding/gs-icon-black.svg"} alt="Logo" className={styles.logo} />
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">Womens</a>
                </li>
                <li>
                    <a href="/products">Mens</a>
                </li>
                <li>
                    <a href="/contact">Help</a>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
