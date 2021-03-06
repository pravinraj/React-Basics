import React from 'react';
import ReactDOM from 'react-dom';

class Home extends React.Component{
	constructor(props) {
		super();
		this.state = {
			age:props.initialAge,
			status:0,
			homeLink:'Change Link'
		};
		setTimeout(()=>{
			this.setState({
				status:1
			});
		},3000);
	}

	onMakeHolder(){
		/*this.age+=3;
		console.log('age:'+this.age);*/
		this.setState({
			age: this.state.age + 3
		});
	}

	onChangeLink(){
		this.props.changeLink(this.state.homeLink);
	}

	render(){
		let content='';
		let text='Something!';
		console.log('this props!!! ', this.props);
		return (
		  <div>
		  	<p>In a new component!</p>
		  	<p>Your name is {this.props.name}, your age is {this.state.age}</p>
		  	<p>Your status is {this.state.status}</p>
		  	<hr/>
		  	<button onClick={()=>this.onMakeHolder()} className='btn btn-primary'>Make me older!</button>
		  	<hr/>
		  	<button onClick={this.props.greet} className='btn btn-success'>Greet</button>
		  	<hr/>
		  	<button onClick={this.onChangeLink.bind(this)} className='btn btn-info'>Change Header</button>
		  </div>
		);
	}
}

Home.propTypes={
	name: React.PropTypes.string,
	initialAge: React.PropTypes.number,
	greet: React.PropTypes.func
}

export default Home;