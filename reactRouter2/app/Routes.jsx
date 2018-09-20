import { BrowserRouter as Router, Route, Link,NavLink } from "react-router-dom";
 import Home from './Home.jsx';
import Submit from './Submit.jsx';
import React from 'react';


class Routes extends React.Component {
	render(){
		return(
			  <div>
			  	<Route exact path="/" component={Home} />
		      	<Route  exact path="/submit" component={Submit} history={history}/>
		      </div>
		);
	}
}

export default Routes;