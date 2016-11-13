import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
import Home from './modules/Home'
import Login from './modules/Login'
import GetStarted from './modules/Get-Started'
import Profile from './modules/Profile'
import Projects from './modules/Projects'
import NewProj from './modules/NewProj'
import Repayment from './modules/Repayment'
import IndividualProject from './modules/IndividualProject'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
    <Route path="/home" component={Home}/>
    <Route path="/get-started" component={GetStarted}/>
    <Route path="/projects" component={Projects}/>
    <Route path="/profile" component={Profile}/>
    <Route path="/about" component={About}/>
    <Route path="/new-project" component={NewProj}/>
    <Route path="/repayment" component={Repayment}/>
    <Route path="/individualproject" component={IndividualProject}/>
  </Router>
), document.getElementById('app'))
