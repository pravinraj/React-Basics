import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/Home.jsx';
import Header from './components/Header.jsx';
//import styles from './index.css';



class App extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			homeLink: 'Home'
		};
	}
	onGreet(){
		alert('Hello!');
	}
	onChangeLinkName(newName){
		this.setState({
			homeLink: newName
		});
	}
	render() {
		return (
			<div className='container'>
				 <div className='row'>
					<div className='col-xs-9'>
						<Header homeLink={this.state.homeLink}/>
					</div>
				 </div>
				 <div className='row'>
					<div className='col-xs-3'>
						<Home 
						name={'Max'} 
						initialAge={27} 
						greet={this.onGreet}
						changeLink={this.onChangeLinkName.bind(this)} 
						initialLinkName={this.state.homeLink}
						/>
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