import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import LinearProgressWithLabel from "../LinearProgress/LinearProgress";


const useStyles = props => makeStyles({
	root: {
		width: 385,
		paddingTop: 0,
		paddingBottom: 4,
		paddingLeft: props.paddingLeft,
	},
	rootBorder: {
		borderBottom: 0,
	},
	barRoot:{
		borderRadius: 5
	},
	bar:{
		borderRadius: 5
	},
	ptop:{
		paddingTop:10
	}
})();


export default function BasicTable(props) {
	const { values, style = {}, classes: pClasses = {} } = props;
	const classes = useStyles(style);

	const commonCellClasses = [ classes.root, classes.rootBorder ].join(' ');

	return (
		<TableContainer component={Paper}>
			<Table aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell style={{color: '#828282'}} classes={{ root: classes.root }}>Value <img src="img/Fill 4.png" alt="v"/></TableCell>
						<TableCell style={{color: '#828282'}} classes={{ root: classes.root }}>Count <img src="img/Fill 4.png" alt="c"/></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{values && values.map((value,index) => {
						const st={};
						if(value.name==='null'){
							st.color='#BDBDBD';
						}
						return (
						<TableRow key={value.name}>
							<TableCell classes={{ root: [commonCellClasses,index?'':classes.ptop].join(' ') }} component="th"
							           scope="row" style={st}>
								{value.render ? value.render(value.name) : value.name}
							</TableCell>
							<TableCell classes={{ root: [commonCellClasses,index?'':classes.ptop].join(' ') }}>
								<LinearProgressWithLabel value={value.progress} classes={{bar:classes.bar,
									root: [classes.barRoot,pClasses.progress].join(' ') }}/>
							</TableCell>
						</TableRow>
					)})}

				</TableBody>
			</Table>
		</TableContainer>
	);
}

