import React from 'react';
import Card from '../UI/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faNodeJs, faReact, faGithub } from '@fortawesome/free-brands-svg-icons';

import classes from './Projects.module.css';

const Projects = () => {
    return (
        <section className={classes.projects}>
            <h2>Recent projects</h2>
            <div className={classes['projects-container']}>
                <Card className={classes['project-card']}>
                    <h2>MealsOrder</h2>
                    <div className={classes['pic-container']}>
                        <img src='assets/projects/food-order.png' alt='meals-order'/>
                    </div>
                    <div className={classes['icons-container']}>
                        <p>
                            Food order app where users can add/remove meals (fetched from an API) to/from a cart and confirm an order by submitting a form which is sent to a DB.  
                        </p>
                        <div className={classes.techs}>
                            <FontAwesomeIcon icon={faHtml5}/>
                            <FontAwesomeIcon icon={faCss3Alt}/>
                            <FontAwesomeIcon icon={faJs}/>
                            <FontAwesomeIcon icon={faReact}/>
                        </div>
                    </div>
                    <div className={classes.links}>
                        <a target='_blank' rel='noreferrer noopener' href='https://github.com/GtzRicky/food-order-app' className={classes.github}><FontAwesomeIcon icon={faGithub} /></a>
                        <a target='_blank' rel='noreferrer noopener' href='https://react-foods.netlify.app/' className={classes.visit}>Visit</a>
                    </div>
                </Card>
                <Card className={classes['project-card']}>
                    <h2>The Cocktail Wiki</h2>
                    <div className={classes['pic-container']}>
                        <img src='assets/projects/cocktails-wiki.png' alt='cocktail-wiki'/>
                    </div>
                    <div className={classes['icons-container']}>
                        <p>
                            React project for searching cocktails and how to make them. Built with react-router-dom and useContext. Powered by TheCocktailDB.  
                        </p>
                        <div className={classes.techs}>
                            <FontAwesomeIcon icon={faHtml5}/>
                            <FontAwesomeIcon icon={faCss3Alt}/>
                            <FontAwesomeIcon icon={faJs}/>
                            <FontAwesomeIcon icon={faReact}/>
                        </div>
                    </div>
                    <div className={classes.links}>
                        <a target='_blank' rel='noreferrer noopener' href='https://github.com/GtzRicky/The-Cocktails-Wiki' className={classes.github}><FontAwesomeIcon icon={faGithub} /></a>
                        <a target='_blank' rel='noreferrer noopener' href='https://the-cocktails-wiki.netlify.app/' className={classes.visit}>Visit</a>
                    </div>
                </Card>
                <Card className={classes['project-card']}>
                    <h2>Smart Expenses Tracker</h2>
                    <div className={classes['pic-container']}>
                        <img src='assets/projects/expense-tracker.png' alt='expenses-tracker'/>
                    </div>
                    <div className={classes['icons-container']}>
                        <p>
                            Expenses tracker where users can input daily expenses (showing date, item and cost) to keep track of them by monthly or annual periods and comparing them month by month.
                        </p>
                        <div className={classes.techs}>
                            <FontAwesomeIcon icon={faHtml5}/>
                            <FontAwesomeIcon icon={faCss3Alt}/>
                            <FontAwesomeIcon icon={faJs}/>
                            <FontAwesomeIcon icon={faReact}/>
                        </div>
                    </div>
                    <div className={classes.links}>
                        <a target='_blank' rel='noreferrer noopener' href='https://github.com/GtzRicky/smart-expense-tracker' className={classes.github}><FontAwesomeIcon icon={faGithub} /></a>
                        <a target='_blank' rel='noreferrer noopener' href='https://smart-expense-tracker.netlify.app/' className={classes.visit}>Visit</a>
                    </div>
                </Card>
                <Card className={classes['project-card']}>
                    <h2>Weather App</h2>
                    <div className={classes['pic-container']}>
                        <img src='assets/projects/weather-app.png' alt='weather-app'/>
                    </div>
                    <div className={classes['icons-container']}>
                        <p>
                            A weather app built in React, using navigator's Geolocalization API powered by OpenWeatherAPI to show weather information of users' location.
                        </p>
                        <div className={classes.techs}>
                            <FontAwesomeIcon icon={faHtml5}/>
                            <FontAwesomeIcon icon={faCss3Alt}/>
                            <FontAwesomeIcon icon={faJs}/>
                            <FontAwesomeIcon icon={faReact}/>
                        </div>
                    </div>
                    <div className={classes.links}>
                        <a target='_blank' rel='noreferrer noopener' href='https://github.com/GtzRicky/Weather-app-React' className={classes.github}><FontAwesomeIcon icon={faGithub} /></a>
                        <a target='_blank' rel='noreferrer noopener' href='https://react-weatherandgeoloc-app.netlify.app/' className={classes.visit}>Visit</a>
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default Projects;
