import React from 'react';
import {
 Navbar,
 NavItem,
 Col,
 Nav } from 'react-bootstrap';
 import { HashRouter as Router, Route, Link,NavLink } from "react-router-dom";
 import Routes from './Routes.jsx';



class App extends React.Component {
	render() {
		return (
			<Col xs={12}>
			<Router basename='/mpl'>
		    <div>
		      <Routes/>
		    </div>
		  </Router>
		  </Col>
					
		);
	}
}

export default App;