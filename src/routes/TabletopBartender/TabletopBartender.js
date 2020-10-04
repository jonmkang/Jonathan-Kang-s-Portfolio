import React, { Component } from 'react';
import './TabletopBartender.css';

import pic1 from './tabletop-bartender-p1.png';
import pic2 from './tabletop-bartender-p2.jpg';
import pic3 from './tabletop-bartender-p3.jpg';

const slides = [
    pic1, pic2, pic3
]

export default class TabletopBartender extends Component {
    constructor(props){
        super()
        this.state={
            slideNumber: 0
        }
    }

    handleSlidesClickPrev = () => {
        const newSlide = (this.state.slideNumber === 0 ? 2 : this.state.slideNumber-1);
        this.setState({
            slideNumber: newSlide
        })
    }

    handleSlidesClickNext = () => {
        const newSlide = (this.state.slideNumber === 2 ? 0 : this.state.slideNumber+1)
        this.setState({
            slideNumber: newSlide
        })
    }

    handleSlides = number => {
        this.setState({
            slideNumber: slides[number]
        })
    }


    render(){
        return(
            <div className="tabletop-bartender-page">
                <h3 className="tabletop-bartender-title">
                    Tabletop Bartender
                </h3>
                <div className="app-description">
                    <div className="app-img-container">
                        <div className="app-img-controls">
                            <button type="button" className="slides-button" onClick={() => this.handleSlidesClickPrev()}>&#10094;</button>
                            <img className="app-photos" src={slides[this.state.slideNumber]} alt="BudgetMe App"/>
                            <button type="button" className="slides-button" onClick={()=> this.handleSlidesClickNext()}>&#10095;</button>
                        </div>
                    </div>
                    <div className="text-description">
                        <div>
                            <p className="tabletop-bartender-description">This website is a cocktail creation database.  This is the front-end aspect of my full-stack project.  With a simple email and password to register, you can use my database to create a cocktail of your design with the ingredients I have stored in the database.
                            </p>
                            <ul>Skills applied:
                                <li>React.js</li>
                                <li>JWT user authentication</li>
                                <li>React Router</li>
                                <li>React Select</li>
                                <li>Fetch Requests</li>
                                <li>Responsive Display</li>
                            </ul>
                        </div>
                        
                        <a 
                            className="app-link"
                            href="https://tabletop-bartender-client.vercel.app/"
                            rel="noopener noreferrer"  
                            target="_blank">
                                Link to Tabletop Bartender Live App</a>
                        <a 
                            className="app-link"
                            href="https://github.com/jonmkang/tabletop-bartender-client"
                            rel="noopener noreferrer"  
                            target="_blank">
                                Link to Tabletop Bartender Client Repo</a>
                        <a 
                            className="app-link"
                            href="https://github.com/jonmkang/tabletop-bartender-server"
                            rel="noopener noreferrer"  
                            target="_blank">
                                Link to Tabletop Bartender Server Repo</a>
                    </div>
                </div>
                
            </div>
        )
    }
}