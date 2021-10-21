import React from 'react';
import Blog from './Blog';

import classes from './Hobbies.module.css';

const Hobbies = () => {
    return (
        <section className={classes.hobbies}>
            <h2>Blog</h2>
            <Blog />
        </section>
    );
};

export default Hobbies;