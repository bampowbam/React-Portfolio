import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './landingPage';
import About from './aboutMe';
import Contract from './contact';
import Projects from './project';
import Resume from './resume';


const Main = () => {
   return <Switch>
        <Route exact path="/React-Profile" component={LandingPage} />
        <Route path ="/about" component={About}/>
        <Route path ="/contact" component={Contract}/>
        <Route path ="/projects" component={Projects}/>
        <Route path ="/resume" component={Resume}/>
    </Switch>
}

export default Main;