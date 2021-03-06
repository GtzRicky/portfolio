import React from 'react';
import Card from '../UI/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faNode, faReact, faGithub, faEvernote, faBootstrap, faStripe } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faAtom, faMailBulk } from '@fortawesome/free-solid-svg-icons';

import classes from './Projects.module.css';

const Projects = () => {
    return (
        <section className={classes.projects}>
            <h2>Recent projects</h2>
            <div className={classes['projects-container']}>
            <Card className={classes['project-card']}>
                    <h2>Fundación Posadas</h2>
                    <div className={classes['pic-container']}>
                        <a target='_blank' rel='noreferrer noopener' href='https://fundacionposadas.com/' className={classes.visit}>
                            <img src='assets/projects/posadas.png' alt='Fundación Posadas'/>
                        </a>
                    </div>
                    <div className={classes['icons-container']}>
                        <p>
                            Fundación Posadas' landing page. This was my first profesional project. The site is implemented with React.js, react-router-dom and react-transition-group. Styling made with CSS modules and CSS-in-JS (styled-components). Donations payment form powered by Stripe. Custom SMTP service built in EmailJs. Translation was created using i18next.
                        </p>
                        <div className={classes.techs}>
                            <FontAwesomeIcon icon={faReact} />
                            <FontAwesomeIcon icon={faStripe} />
                            <FontAwesomeIcon icon={faNode} />
                            <FontAwesomeIcon icon={faMailBulk} />
                        </div>
                    </div>
                    <div className={classes.links}>
                        <a target='_blank' rel='noreferrer noopener' href='https://fundacionposadas.com/' className={classes.visit}>Visit</a>
                    </div>
                </Card>
                <Card className={classes['project-card']}>
                    <h2>WhatsUpp API</h2>
                    <div className={classes['pic-container']}>
                        <a target='_blank' rel='noreferrer noopener' href='https://academlo-wa-api.herokuapp.com/api-docs/' className={classes.visit}>
                            <img src='assets/projects/whatsupp-api.png' alt='whatsupp-api'/>
                        </a>
                    </div>
                    <div className={classes['icons-container']}>
                        <p>
                            Messaging app API, built with NodeJS, Express, JWT and connected to a PostgreSQL database via Sequelize. Test Driven Development using Jest.
                        </p>
                        <div className={classes.techs}>
                            <FontAwesomeIcon icon={faNode} />
                            <FontAwesomeIcon icon={faDatabase} />
                            <FontAwesomeIcon icon={faJs} />
                            <FontAwesomeIcon icon={faEvernote} />
                        </div>
                    </div>
                    <div className={classes.links}>
                        <a target='_blank' rel='noreferrer noopener' href='https://github.com/GtzRicky/boilerplate-sequelize' className={classes.github}><FontAwesomeIcon icon={faGithub} /></a>
                        <a target='_blank' rel='noreferrer noopener' href='https://academlo-wa-api.herokuapp.com/api-docs/' className={classes.visit}>Visit</a>
                    </div>
                </Card>
                <Card className={classes['project-card']}>
                    <h2>The Cocktail Wiki</h2>
                    <div className={classes['pic-container']}>
                        <a target='_blank' rel='noreferrer noopener' href='https://the-cocktails-wiki.netlify.app/' className={classes.visit}>
                            <img src='assets/projects/cocktails-wiki.png' alt='cocktail-wiki'/>
                        </a>
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
                    <h2>WhatsUpp</h2>
                    <div className={classes['pic-container']}>
                            <img src='assets/projects/whatsupp-front.png' alt='whatsupp'/>
                    </div>
                    <div className={classes['icons-container']}>
                        <p>
                            Messaging app clone frontend project —connected with the Whatsupp API— built in React-Redux, created as part of the final fullstack project for the React and NodeJs modules of Academlo Bootcamp. <strong>Under development.</strong>
                        </p>
                        <div className={classes.techs}>
                            <FontAwesomeIcon icon={faReact} />
                            <FontAwesomeIcon icon={faBootstrap} />
                            <FontAwesomeIcon icon={faJs} />
                            <FontAwesomeIcon icon={faAtom} />
                        </div>
                    </div>
                    <div className={classes.links}>
                        <a target='_blank' rel='noreferrer noopener' href='https://github.com/GtzRicky/whatsupp-frontend' className={classes.github}><FontAwesomeIcon icon={faGithub} /></a>
                    </div>
                </Card>
                <Card className={classes['project-card']}>
                    <h2>MealsOrder</h2>
                    <div className={classes['pic-container']}>
                        <a target='_blank' rel='noreferrer noopener' href='https://the-cocktails-wiki.netlify.app/' className={classes.visit}>
                            <img src='assets/projects/food-order.png' alt='meals-order'/>
                        </a>
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
                    <h2>Smart Expenses Tracker</h2>
                    <div className={classes['pic-container']}>
                        <a target='_blank' rel='noreferrer noopener' href='https://smart-expense-tracker.netlify.app/' className={classes.visit}>
                            <img src='assets/projects/expense-tracker.png' alt='expenses-tracker'/>
                        </a>
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
                        <a target='_blank' rel='noreferrer noopener' href='https://react-weatherandgeoloc-app.netlify.app/' className={classes.visit}>
                            <img src='assets/projects/weather-app.png' alt='weather-app'/>
                        </a>
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
