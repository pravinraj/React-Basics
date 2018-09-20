import { HashRouter as Router, Route, Link,NavLink, Switch } from "react-router-dom";
 import Home from './Home.jsx';
import Submit from './Submit.jsx';
import React from 'react';


class Routes extends React.Component {
	render(){
		return(
			  <div>
			  	<Switch>
				  	<Route exact path="/" component={Home} />
			      	<Route exact path="/submit" component={Submit} history={history}/>
		      	</Switch>
		      </div>
		);
	}
}

export default Routes;