import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component{
	render(){
	console.log('Inside header!!!! ');
		return (
			<nav className='navbar navbar-default'>
				<div className='container'>
					<div className='navbar-header'>
						<ul className='nav navbar-nav'>
							<li><a href='#'>Home</a></li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Header;