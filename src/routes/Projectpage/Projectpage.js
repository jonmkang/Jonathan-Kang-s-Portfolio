import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Projectpage.css';

export default class Projectpage extends Component {

    render(){
        return(
            <div className="project-page">
                <div className="project-container">
                    <h1 className="project-page-title">Fullstack Projects</h1>
                    <div className="fullstack-projects">
                        <Link 
                            className="project"
                            to="/project-page/BudgetMe">
                            <h4 className="project-title">BudgetMe</h4>
                            <p className='project-description'>Budget Tracking App</p>
                        </Link>
                        <Link 
                            className="project"
                            to="/project-page/TabletopBartender">
                            <h4 className="project-title">Tabletop Bartender</h4>
                            <p className='project-description'>Cocktail Creation App</p>
                        </Link>
                    </div>
                    <h2 className="project-page-title">Front End Project</h2>
                    <div className="fullstack-projects">
                        <Link
                            className="project"
                            to="/project-page/Intro-API">
                            <h4 className="project-title">API Project</h4>
                            <p className="project-description">API Request App</p>
                        </Link>

                    </div>
                </div>
            </div>
        )
    }
}