import React, { Component } from 'react';
import './IntroApi.css';

import pic1 from './intro-api-p1.jpg';
import pic2 from './intro-api-p2.jpg';
import pic3 from './intro-api-p3.jpg';

const slides = [
    pic1, pic2, pic3
]

export default class IntroApi extends Component {
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
            <div className="intro-api-page">
                <h3 className="intro-api-title">
                    Intro API Client
                </h3>
                <div className="app-description">
                    <div className="app-img-container">
                        <div className="app-img-controls">
                            <button type="button" className="slides-button" onClick={() => this.handleSlidesClickPrev()}>&#10094;</button>
                            <img className="intro-app-photos" src={slides[this.state.slideNumber]} alt="Intro API App"/>
                            <button type="button" className="slides-button" onClick={()=> this.handleSlidesClickNext()}>&#10095;</button>
                        </div>
                    </div>
                    <div className="text-description">
                        <div>
                            <p className="intro-api-description">This website uses two public API's for entertainment recommendations. It takes the user's choice of music, tv show, or movie and gives recommendations upon search.  I built this during the COVID-19 Pandemic to widen my tastes in entertainment as well as others who wish to use it.
                            </p>
                            <ul>Skills applied:
                            <li>jQuery functions</li>
                            <li>Fetch requests</li>
                            <li>Ajax requests</li>
                            </ul>
                        </div>
                        
                        <a 
                            className="app-link"
                            href="https://github.com/jonmkang/api-hack-project"
                            rel="noopener noreferrer"  
                            target="_blank">
                                Link to Intro API Live App</a>
                        <a 
                            className="app-link"
                            href="https://jonmkang.github.io/api-hack-project/"
                            rel="noopener noreferrer"  
                            target="_blank">
                                Link to Intro API Client</a>
                    </div>
                </div>
                
            </div>
        )
    }
}