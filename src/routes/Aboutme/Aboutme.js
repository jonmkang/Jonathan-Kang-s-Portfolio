import React, { Component } from 'react';
import Photo from './photo-of-me.jpg';
import './Aboutme.css';

export default class Aboutme extends Component {

    render(){
        return (
            <div className="about-me-container">
                <h1 className="about-me-title">About me</h1>
                <div className="about-me-details">
                    <div className="about-me">
                        <img className="photo-of-me" src={Photo} alt="Jonathan Kang"/>
                        <p className="intro">Hello, I'm Jon. I took an interest in coding because puzzles and problems are engaging in my mind.  Learning front-end development is just the beginning of my journey as I would like to pursue a full-stack career path in the future.</p>
                        <p className="intro">I'm a front-end web developer and a student of the Front End Web Development Career Path Bootcamp at Bloc.  
                    I am currently collaborating with the company Etherize as a front-end developer.
                    During my free time, I prefer to go rock climbing at a gym or cooking a meal for myself and my significant other. 
                    On rainy days I prefer to hole up and play a few video games, watch a movie, or read a book.  
                    My previous occupations have dealt with hospitality, starting with being a waiter and making my way up to being head bartender at Sen Sakana in Midtown, New York.  I enjoy working with people and in team-oriented environments.</p>
                    </div>
                </div>
            </div>
        )
    }
}