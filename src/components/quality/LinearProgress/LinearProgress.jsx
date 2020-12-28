import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function LinearProgressWithLabel(props) {
	const {classes:{label}={}} = props;
	return (
		<Box display="flex" alignItems="center" style={{position:'relative'}}>
			<Box width="100%" mr={1}>
				<LinearProgress  {...props} classes={props.classes} variant="determinate"/>
			</Box>
			<Box minWidth={35} className={label} style={{left:props.value*6}}>
				<Typography variant="body2" color="textSecondary">{`${Math.round(
					props.value,
				)}${props.units || ''}`}</Typography>
			</Box>
		</Box>
	);
}

export default LinearProgressWithLabel;
