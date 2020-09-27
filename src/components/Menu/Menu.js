import React, { Component } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';


export default class Menu extends Component {
    constructor(props){
        super()
        this.state={
            hideMenu: false
        }

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true);
    }
    
    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, true);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClick = () => {
        const hideMenu = !this.state.hideMenu
        this.setState({
            hideMenu
        })
    }

    handleClickOutside = e => {
        /* Check that we've clicked outside of the container and that it is open */

        if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
            this.setState({
                hideMenu: false
            })
        }
    };

    render(){
        return(
            <div className="dropdown"> 
                <Link className='home-button-link' to='http://jonmkang.github.io/Jonathan-Kang-s-Portfolio/'>Jonathan's Portfolio</Link>

                <div className="small-menu" ref={this.setWrapperRef}>
                    {
                    this.state.hideMenu ? 
                    <></>
                    :
                    <button onClick={()=> this.handleClick()} className="menu-button">Menu</button>
                    }
                    
                    {
                        this.state.hideMenu ?
                        <header id="myDropdown" className="dropdown-content">
                            <Link onClick={()=>this.handleClick()} className="header-link" to='http://jonmkang.github.io/Jonathan-Kang-s-Portfolio/'>Home</Link>
                            <Link onClick={()=>this.handleClick()} className="header-link" to='http://jonmkang.github.io/Jonathan-Kang-s-Portfolio/about-me'>About me</Link>
                            <Link onClick={()=>this.handleClick()} className="header-link" to='http://jonmkang.github.io/Jonathan-Kang-s-Portfolio/project-page'>Projects</Link>
                            <Link onClick={()=>this.handleClick()} className="header-link" to='http://jonmkang.github.io/Jonathan-Kang-s-Portfolio/contact'>Contact Info</Link>
                        </header> 
                        :
                        <></>
                    }
                </div>
                
                <div className="large-menu">
                    <Link onClick={()=>this.handleClick()} className="header-link" to='/'>Home</Link>
                    <Link onClick={()=>this.handleClick()} className="header-link" to='/about-me'>About me</Link>
                    <Link onClick={()=>this.handleClick()} className="header-link" to='/project-page'>Projects</Link>
                    <Link onClick={()=>this.handleClick()} className="header-link" to='/contact'>Contact Info</Link>
                </div>

            
            </div>
        )
    }
}