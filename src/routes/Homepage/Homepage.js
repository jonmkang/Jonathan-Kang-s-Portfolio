import React, { Component } from 'react';
import './Homepage.css';

export default class Homepage extends Component {

    render(){
        return(
            <div className="home-page-description">
                <h1 className="home-page-description-title">Programmer, Trivia Enthusiast,<br/>Rock Climber, Mixologist</h1>
                <p className="home-page-description-text">Hello, I'm <span>Jonathan Kang</span>.  I moved to New York from a small town in Michigan to become a bartender and slowly gravitated to the tech industry. This portfolio is to showcase my <span>full-stack</span> skills.</p>
            </div>
        )
    }
}