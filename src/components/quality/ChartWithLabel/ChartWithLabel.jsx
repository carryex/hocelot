import React from 'react';
import Chart from "../Chart/Chart";
import s from './ChartWithLabel.module.css';

const ChartWithLabel = (props) => {
	const { width, size, value, title, total, colors } = props;

	return (
		<div className={s.chart}>
			<Chart width={width} size={size} value={value} colors={colors}/>
			<div className={s.label}>
				<div className={s.title}>{title}</div>
				<div className={s.percentage}>{value}%</div>
				<div className={s.total}>Total: {total}</div>
			</div>
		</div>
	);
};


export default ChartWithLabel;

