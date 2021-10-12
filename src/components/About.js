import React from 'react';
import Icons from '../UI/Icons';

import classes from './About.module.css';

const About = () => {
    return (
        <section className={classes.about}>
            <div className={classes.description}>
                <h2>Hello world! I'm Ricardo</h2>
                <h4>Full-stack web developer</h4>
                <p>Passionate for creating innovative experiences, reliable and responsive layouts, built within the best practices and
                    tested development for delivering high quality and scalable products.</p>
                <Icons className={classes['hero-icons']}/>
            </div>
            <div className={classes.photo}> 
            </div>
        </section>
    );
};

export default About;
