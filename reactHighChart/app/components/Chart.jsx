import React from 'react';
import ReactHighcharts from 'react-highcharts';

class Chart extends React.Component{
	render(){
		console.log('Inside Chart!!!! ');
		var config = {
		  credits:{
		  	enabled: false
		  },
		  xAxis: {
		    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
		  },
		  series: [{
		    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
		  }]
		};
		return (
			<div>
	  		  <ReactHighcharts config={config}/>
	  	</div>		
	  	);
	}
}

export default Chart;