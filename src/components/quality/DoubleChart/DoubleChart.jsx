import React from 'react';
import Chart from "../Chart/Chart";
import s from './DoubleChart.module.css';


const DoubleChart = (props) => {
	const { width, size, values = [], colors = [] } = props;

	const style = {
		position: 'absolute',
		top: size / 2,
		left: size / 2,
		transform: `translate(-50%,-50%)`
	};

	const innerStyle = {
		...style,
		display: 'flex',
		flexDirection: 'column',
	};

	return (
		<div style={{ position: 'relative' }}>
			<Chart width={width} size={size} value={values[ 0 ].value} colors={colors[ 0 ]}/>
			<Chart style={{ ...style, transform: `translate(50%, 50%)` }}
			       width={width} size={size - width * 2 - 10} value={values[ 1 ].value} colors={colors[ 1 ]}/>
			<div style={innerStyle}>
				<div className={s.inner_value}  style={{ color: colors[ 0 ][ 0 ]}}>{`${values[ 0 ].value}%`}</div>
				<div className={s.inner_title} style={{ color: colors[ 0 ][ 0 ]}}>{values[ 0 ].title}</div>
			</div>
		</div>
	)
};


export default DoubleChart;

