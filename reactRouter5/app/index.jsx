import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import  './index.css';
import App from './App.jsx'


import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

ReactDOM.render(
	<App/>,
	document.getElementById('app')
);