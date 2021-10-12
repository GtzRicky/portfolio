import React from 'react';
import Card from '../UI/Card';

import classes from './Skills.module.css';

const techIcons = [
    {
        id: 'html5',
        img: 'assets/icon-html.png',
        name: 'HTML5'
    },
    {
        id: 'css3',
        img: 'assets/icon-css.png',
        name: 'CSS3'
    },
    {
        id: 'javascript',
        img: 'assets/icon-javascript.png',
        name: 'Javascript'
    },
    {
        id: 'react',
        img: 'assets/icon-react.png',
        name: 'React'
    },
    {
        id: 'nodejs',
        img: 'assets/icon-nodejs.png',
        name: 'Node Js'
    },
    {
        id: 'apirest',
        img: 'assets/icon-apirest.png',
        name: 'API Rest'
    },
    {
        id: 'postgresql',
        img: 'assets/icon-postgresql.png',
        name: 'PostgreSQL'
    },
    {
        id: 'git',
        img: 'assets/icon-git.png',
        name: 'Git'
    },
    {
        id: 'jest',
        img: 'assets/icon-jest.png',
        name: 'Jest'
    },
    {
        id: 'JWT',
        img: 'assets/icon-jwtoken.png',
        name: 'JWToken'
    },
    {
        id: 'stripe',
        img: 'assets/icon-stripe.png',
        name: 'Stripe'
    },
    {
        id: 'github',
        img: 'assets/icon-github.png',
        name: 'Github'
    },
    {
        id: 'gitlab',
        img: 'assets/icon-gitlab.png',
        name: 'Gitlab'
    },
    {
        id: 'swagger',
        img: 'assets/icon-swagger.png',
        name: 'Swagger'
    },
    {
        id: 'responsive',
        img: 'assets/icon-responsive.png',
        name: 'Responsive Design'
    },
    {
        id: 'firebase',
        img: 'assets/icon-firebase.png',
        name: 'Google Firebase'
    }
];

const mappedSkills = techIcons.map((tech) => {
    return <Card key={tech.id} className={classes['tech-card']}>
        <img src={tech.img} alt={tech.name}/>
        <h4>{tech.name}</h4>
    </Card>
});

const Skills = () => {
    return (
        <section className={classes.hero}>
            <h2>Technologies I work with</h2>
            <div className={classes.tech}>
                {mappedSkills}
            </div>
        </section>
    );
};

export default Skills;