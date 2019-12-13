import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './landingPage';
import Contract from './contact';
import Projects from './project';
import Resume from './resume';


const Main = () => {
   return <Switch>
        <Route exact path="/React-Portfolio" component={LandingPage} />
        <Route path ="/contact" component={Contract}/>
        <Route path ="/projects" component={Projects}/>
        <Route path ="/resume" component={Resume}/>
    </Switch>
}

export default Main;