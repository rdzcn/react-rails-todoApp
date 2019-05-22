import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../css/style.css';
import App from '../components/App';

const Root = () => {
  return (
    <Router>
      <Switch>
				<Route exact path="/" component={App} />
	    </Switch>    
		</Router>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Root />,
    document.body.appendChild(document.createElement('div')),
  )
})
