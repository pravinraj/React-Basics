import React from 'react';
import ReactDOM from 'react-dom';
import { Button,ButtonToolbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import  './index.css';



class App extends React.Component {
	render() {
		let dynamicVar = 'Hello World1';
		return (
			<div>
				<div>
					<p>{dynamicVar}</p>
					<ButtonToolbar>
						<Button bsStyle="success">Primary</Button>
					</ButtonToolbar>
				</div>
				<div className='secDiv'>
					This is second div
				</div>
			</div>			
		);
	}
}

ReactDOM.render(
	<App/>,
	document.getElementById('app')
);