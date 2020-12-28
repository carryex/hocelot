import React from 'react';
import s from './Steps.module.css';


const Steps = (props) => {
	return (
		<div className={s.steps}>
			{props.children}
		</div>
	);
};

export default Steps;
