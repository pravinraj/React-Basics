import React from 'react';

class Home extends React.Component {

	render(){
		return(
			<div>
				<h2>Home</h2>
				<button onClick={()=>{this.props.history.push('/submit')}}>navigate</button>
			</div>
		);
	}

}

export default Home;