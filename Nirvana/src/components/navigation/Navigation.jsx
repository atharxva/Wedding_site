import {Link} from 'react-router-dom'
import React from 'react';
import styles from './Navigation.module.css'; 

const Navigation = () => {
    return (
        <nav className={styles.navbar}>
            <div className={navbar_logo}>
                <img src="your-logo-url.jpg" alt="Logo" />
            </div>
            <div className={navbar_profile}>
                <img src="your-profile-url.jpg" alt="Profile" />
            </div>
        </nav>
    );
};

export default Navigation;
