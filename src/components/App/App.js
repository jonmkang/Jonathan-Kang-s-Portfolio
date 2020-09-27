import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'

import Homepage from '../../routes/Homepage/Homepage';
import Aboutme from '../../routes/Aboutme/Aboutme';
import Projectpage from '../../routes/Projectpage/Projectpage';
import BudgetMe from '../../routes/BudgetMe/BudgetMe';
import TabletopBartender from '../../routes/TabletopBartender/TabletopBartender';
import IntroApi from '../../routes/IntroApi/IntroApi';
import ContactInfo from '../../routes/ContactInfo/ContactInfo';

import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Switch>
        <Route
          exact
          path='/'
          component={Homepage}/>
        <Route  
          exact
          path='/about-me'
          component={Aboutme}/>
        <Route  
          exact
          path='/project-page'
          component={Projectpage}/>
        <Route
          exact
          path='/project-page/BudgetMe'
          component={BudgetMe}/>
        <Route
          exact 
          path='/project-page/TabletopBartender'
          component={TabletopBartender}/>
        <Route
          exact
          path='/project-page/Intro-API'
          component={IntroApi}/>
        <Route
          exact
          path='/contact'
          component={ContactInfo}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
