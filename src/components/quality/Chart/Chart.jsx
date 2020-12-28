import React from 'react';
import { Cell, Pie, PieChart } from 'recharts';

const Chart = (props) => {
	const { width, size, value, colors: COLORS = [ '#0D4097', '#E0E0E0', ], style = {} } = props;

	const data = [ { value: value }, { value: 100 - value } ];

	return (
		<PieChart width={size} height={size}
		          style={{ ...style, transform: 'scale(1,-1) rotate(90deg) ' + (style.transform || '') }}>
			<Pie
				data={data}
				cx={size / 2 - 4}
				cy={size / 2 - 4}
				innerRadius={size / 2 - width}
				outerRadius={size / 2}
				paddingAngle={0}
			>
				{
					data.map((entry, index) => <Cell fill={COLORS[ index % COLORS.length ]}/>)
				}
			</Pie>
		</PieChart>
	)
};

export default Chart;
