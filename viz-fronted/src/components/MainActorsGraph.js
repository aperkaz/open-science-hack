import React from 'react';
import { view } from 'react-easy-state';
import styled from 'styled-components';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Div = styled.div``;

const populateOptions = () => ({
	credits: {
		enabled: false
	},
	chart: {
		type: 'column',
		height: (3 / 4) * 100 + '%' // 16:9 ratio
	},
	title: {
		text: 'Main Actors (Bar Graph)'
	},
	subtitle: {
		text: 'Users that tweeted most'
	},
	xAxis: {
		type: 'category',
		labels: {
			rotation: -45,
			style: {
				fontSize: '13px',
				fontFamily: 'Verdana, sans-serif'
			}
		}
	},
	yAxis: {
		min: 0,
		title: {
			text: 'Tweets'
		}
	},
	legend: {
		enabled: false
	},
	tooltip: {
		pointFormat: 'Posted tweets: <b>{point.y}</b>'
	},
	series: [
		{
			name: 'Tweets',
			data: [
				['DiabetesSverige', 269],
				['MariaJonsson1', 174],
				['Ardalsberget', 85],
				['medelklassman', 81],
				['ssdf12diabetes', 70],
				['DiabetesLUDC', 66],
				['AgnesWold', 66],
				['advokaten13', 60],
				['Liinnaa95', 59],
				['Lavkarbokost', 53],
				['veronikapso', 52],
				['springmats', 50],
				['JacobGudiol', 46],
				['DinMuminmamma', 45],
				['AliciaEdin', 43]
			],
			dataLabels: {
				enabled: true,
				rotation: -90,
				color: '#FFFFFF',
				align: 'right',
				y: 10, // 10 pixels down from the top
				style: {
					fontSize: '13px',
					fontFamily: 'Verdana, sans-serif'
				}
			}
		}
	]
});
export const MainActorsGraph = view(() => (
	<Div>
		<HighchartsReact highcharts={Highcharts} options={populateOptions()} />
	</Div>
));
