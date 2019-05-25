import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../css/style.css';
import App from '../components/App';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})
