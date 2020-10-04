import React, { Component } from 'react';
import './BudgetMe.css';
import ProjectBar from '../../components/ProjectBar/ProjectBar';

import pic0 from './budget-me-pic1.png';
import pic1 from './budget-me-pic2.png';
import pic2 from './budget-me-pic3.png';
import pic3 from './budget-me-pic4.png';

const slides=[
    pic0, pic1, pic2, pic3
]

export default class BudgetMe extends Component {
    constructor(props){
        super()
        this.state={
            slideNumber: 0
        }
    }

    handleSlidesClickPrev = () => {
        const newSlide = (this.state.slideNumber === 0 ? 3 : this.state.slideNumber-1);
        this.setState({
            slideNumber: newSlide
        })
    }

    handleSlidesClickNext = () => {
        const newSlide = (this.state.slideNumber === 3 ? 0 : this.state.slideNumber+1)
        this.setState({
            slideNumber: newSlide
        })
    }

    handleSlides = number => {
        this.setState({
            slideNumber: slides[number]
        })
    }


    render() {
        return (
            <div className="budget-me-page">
                {/* <ProjectBar/> */}
                <h3 className="budget-me-title">
                    BudgetMe
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
                            <p className="budget-me-description">This website is a budget tracking application.  
                            This is the front-end aspect of my full-stack project.
                            With an email and password to register, you can use my database to set a budget and store expenditures as you spend.
                            </p>
                            <ul>Skills applied:
                                <li>React.js</li>
                                <li>Express.js</li>
                                <li>Node.js</li>
                                <li>PostgreSQL</li>
                                <li>Responsive Design</li>
                                <li>Fetch requests</li>
                            </ul>
                        </div>
                        
                        <a 
                            className="app-link"
                            href="https://budget-me-one.vercel.app/"
                            rel="noopener noreferrer"  
                            target="_blank">
                                Link to BudgetMe Live App</a>
                        <a 
                            className="app-link"
                            href="https://github.com/jonmkang/budget-me"
                            rel="noopener noreferrer"  
                            target="_blank">
                                Link to BudgetMe Client Repo</a>
                        <a 
                            className="app-link"
                            href="https://github.com/jonmkang/budget-me-server"
                            rel="noopener noreferrer"  
                            target="_blank">
                                Link to BudgetMe Server Repo</a>
                    </div>
                </div>
                
            </div>
        )
    }
}