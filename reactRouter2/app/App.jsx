import React from 'react';
import {
 Navbar,
 NavItem,
 Col,
 Nav } from 'react-bootstrap';
 import { BrowserRouter as Router, Route, Link,NavLink } from "react-router-dom";
 import Routes from './Routes.jsx';



class App extends React.Component {
	render() {
		return (
			<Col xs={12}>
			<Router>
		    <div>
		    	<Col xs={12} className='appHeader'>
					<Navbar>
						<Nav>
							<NavItem><NavLink exact activeClassName='activeNav' to='/'>Home</NavLink></NavItem>
							<NavItem><NavLink exact activeClassName='activeNav' to='/submit'>Submit a receipe</NavLink></NavItem>
						</Nav>
					</Navbar>
				</Col>
		      <Routes/>
		    </div>
		  </Router>
		  </Col>
					
		);
	}
}

export default App;