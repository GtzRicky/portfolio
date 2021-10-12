import React from 'react';
import Icons from '../UI/Icons';

import classes from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <h5>Made with ♥ by Ricardo Gutiérrez</h5>
            <Icons className={classes.icons} />
        </footer>
    );
};

export default Footer;
