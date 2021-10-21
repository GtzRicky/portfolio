import React from 'react';
import Card from '../UI/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWordpressSimple } from '@fortawesome/free-brands-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons';

import classes from './Blog.module.css';

const Blog = () => {
    return (
        <Card className={classes['blog-container']}>
            <div className={classes.description}>
                <h3>Daily TopCat</h3>
                <hr/>
                <p>Started this blog to keep track of my learning path, to share with you my experience throughout the quest of becoming a developer.</p>
                <p>I post about programming languages, PC components analysis and reviews of the newest —and some of the old dearest— videogames.</p>
            </div>
            <div className={classes.wordpress}>
                <img src='assets/projects/daily-topcat.png' alt='Daily TopCat' />
                <div className={classes['blog-links']}>
                    <a target='_blank' rel='noreferrer noopener' href='https://dailytopcat.wordpress.com/'><FontAwesomeIcon icon={faWordpressSimple}/></a>
                    <a target='_blank' rel='noreferrer noopener' href='https://hashnode.com/@GtzRicky'><FontAwesomeIcon icon={faBlog}/></a>
                </div>
            </div>
        </Card>
    );
};

export default Blog;