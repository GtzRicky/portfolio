import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

import classes from './Icons.module.css';

const Icons = (props) => {
    return (
        <div className={props.className}>
            <a target='_blank' href='https://github.com/GtzRicky' rel='noreferrer noopener'>
                <FontAwesomeIcon icon={faGithub} className={classes.social}/>
            </a>
            <a target='_blank' href='https://www.linkedin.com/in/ricardogtzs/' rel='noreferrer noopener'>
                <FontAwesomeIcon icon={faLinkedin} className={classes.social} />
            </a>
            <a target='_blank' href='https://twitter.com/GtzRicky' rel='noreferrer noopener'>
                <FontAwesomeIcon icon={faTwitter} className={classes.social} />
            </a>
            <a target='_blank' href='https://www.instagram.com/ricardogusar/?hl=es' rel='noreferrer noopener'>
                <FontAwesomeIcon icon={faInstagram} className={classes.social}/>
            </a>
            <a target='_blank' href='https://www.youtube.com/channel/UCxY_bAW1KKNhu1a_XyMg8NA' rel='noreferrer noopener'>
                <FontAwesomeIcon icon={faYoutube}className={classes.social} />
            </a>
        </div>
    );
};

export default Icons;
