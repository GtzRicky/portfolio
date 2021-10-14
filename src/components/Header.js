import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Header.module.css';

const Header = () => {
    return (
        <nav className={classes.navbar}>
            <div className={classes['nav-container']}>
                <ul className={classes['nav-menu']}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/hobbies">Hobbies</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Header;
