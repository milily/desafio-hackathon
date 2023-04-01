import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
//Styles
import './../../App.css';

const data = [
	
	{
	  name: '27/02/2023',
	  uv: 2780,
	  animo: 0,
	  amt: 2000,
	},
	{
	  name: '06/03/2023',
	  uv: 1890,
	  animo: 50,
	  amt: 2181,
	},
	{
	  name: '13/03/2023',
	  uv: 2390,
	  animo: 100,
	  amt: 2500,
	},
	{
	  name: '20/03/2023',
	  uv: 3490,
	  animo: 50,
	  amt: 2100,
	},
  ];

export default class ChartByWeeks extends PureComponent {
	static demoUrl = 'https://codesandbox.io/s/bar-chart-with-double-yaxis-zr232';

	render() {
		return (
			<div className='chartContainer'>
				<ResponsiveContainer width="100%" debounce={300}>
					<BarChart
						width={100}
						height={300}
						data={data}
						margin={{
							top: 20,
							right: 30,
							left: 20,
							bottom: 5,
						}}
						barSize={20}
						>
						<XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
						<YAxis />
						<Tooltip />
						<Legend />
						<CartesianGrid strokeDasharray="3 3" />
						<Bar dataKey="animo" fill="#82ca9d" background={{ fill: '#eee' }} />
					</BarChart>
				</ResponsiveContainer>
			</div>
        );
  	}
}