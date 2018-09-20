import React from 'react';

class Submit extends React.Component {

	constructor(props){
		super(props);
		this.state={};
		this.submitReceipe = this.submitReceipe.bind(this);
	}

	submitReceipe(){
		console.log('button clicked');
		this.props.history.push('/');
	}

	render(){
		return(
			<div>
				<h2>Submit</h2>
				<button onClick={this.submitReceipe}>Submit a Receipe</button>
			</div>
		);
	}
}

export default Submit;	