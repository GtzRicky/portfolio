import React from 'react';

import classes from './Header.module.css';

const Header = () => {
    return (
        <nav className={classes.navbar}>
            <div className={classes['nav-container']}>
                <ul className={classes['nav-menu']}>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Hobbies</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    )
};

export default Header;
