import React, { Component } from 'react';
import './ContactInfo.css';

export default class ContactInfo extends Component{

    render(){
        return(
            <div className="contact-page-container">
                <a className="contact-info" href="mailto:jon.m.kang@gmail.com">Email me here!</a>
                <a className="contact-info" href="https://www.linkedin.com/in/jonathan-kang-31631949/" target="_blank" rel="noopener noreferrer">Look at my LinkedIn!</a>
                <a className="contact-info" href="https://github.com/jonmkang" target="_blank" rel="noopener noreferrer">Look at my github!</a>
            </div>
        )
    }
}