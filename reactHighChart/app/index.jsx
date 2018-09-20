import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/Home.jsx';
import Header from './components/Header.jsx';
import Chart from './components/Chart.jsx'
//import styles from './index.css';



class App extends React.Component {
	onGreet(){
		alert('Hello!');
	}
	render() {
		return (
			<div className='container'>
				 <div className='row'>
					<div className='col-xs-9'>
						<Header/>
					</div>
				 </div>
				 <div className='row'>
					<div className='col-xs-3'>
						<Home name={'Max'} initialAge={27} greet={this.onGreet} />
					</div>
				 </div>
				 <div className='row'>
					<div className='col-xs-9'>
						<Chart/>
					</div>
				 </div>
			 </div>
		);
	}
}

ReactDOM.render(
	<App/>,
	document.getElementById('app')
);