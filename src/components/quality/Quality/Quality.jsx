import React from 'react';
import Page from '../Page';
import s from './Quality.module.css';
import Header from '../Header/Header';
import TableContainer from "../TableContainer/TableContainer";
import { makeStyles } from "@material-ui/core/es/styles";


const stepItems = [
	{
		key: 'solution',
		title: 'solution',
	},
	{
		key: 'industry',
		title: 'industry',
	},
	{
		key: 'product',
		title: 'product',
	},
	{
		key: 'your fire',
		title: 'your fire',
	},
	{
		key: 'upload complete',
		title: 'upload complete',
	},
	{
		key: 'sort columbns',
		title: 'sort columbns',
	},
];

const pantallaItems = [
	{
		key: 'dashboard',
		title: 'Dashboard',
	},
	{
		key: 'quality',
		title: 'Quality',
	},
	{
		key: 'hocelot quality',
		title: 'Hocelot Quality',
	},
	{
		key: 'enrichment',
		title: 'Enrichment',
	},
	{
		key: 'model',
		title: 'Model',
	},
	{
		key: 'business case',
		title: 'Business case',
	}
]

const rows = [
	{ name: 'null', progress: 56 },
	{ name: 'Álvaro', progress: 40 },
	{ name: 'Andrea', progress: 4 },
	{ name: 'Carlos', progress: 20 },
	{ name: 'Rodrigo', progress: 34 },
	{ name: 'Celia', progress: 4 },
	{ name: 'Jon', progress: 1 },
	{ name: 'Miguel', progress: 1 },
	{ name: 'Tamara', progress: 1 },
	{ name: 'Felipe', progress: 1 },
	{ name: 'Pedro', progress: 1 },
	{ name: 'Luisa', progress: 1 },
	{ name: 'Andrea', progress: 1 },
	{ name: 'Teresa', progress: 1 },
	{ name: 'Pablo', progress: 1 },
	{ name: 'Ramiro', progress: 1 },
	{ name: 'Javier', progress: 1 },
	{ name: 'Javi', progress: 1 },
	{ name: 'Arturo', progress: 1 },
	{ name: 'Mercedes', progress: 1 },
];

const render = (name) => (
	<div style={{ display: 'flex' }}>
		{[ ...name ].map(char => (
				<div className={s.letter}>{char}</div>
			)
		)}
	</div>
);


const rows2 = [
	{ name: 'www', progress: 56, render:render},
	{ name: 'wwwwww', progress: 4, render:render },
	{ name: 'ww', progress: 20, render:render },
	{ name: 'wwww', progress: 34, render:render },
	{ name: 'wwwww', progress: 4, render:render },
	{ name: 'wwww', progress: 20, render:render },
];

const rows3 = [
	{ name: 'LLLL LLLLL', progress: 56, render:render },
	{ name: 'LLLLL', progress: 4, render:render },
	{ name: 'LLLL', progress: 20, render:render },
	{ name: 'LLLL LLLL', progress: 24, render:render },
	{ name: 'LLLLLL LLLL', progress: 4, render:render },
	{ name: 'LLLL', progress: 56, render:render },
];

const useStyles = makeStyles({
	progress: {
		height: 8,
		backgroundColor: '#E0E0E0'
	},
});

const Quality = () => {
	const classes = useStyles();

	return (
		<Page direction="column" justify="space-between">
			<Header/>

			<div className={s.content}>
				<div className={s.pantalla}>
					<div className={s.pantalla_items}>
						{
							pantallaItems.map(item => (
								<div key={item.key} className={s.pantalla_item}>{item.title}</div>
							))
						}
					</div>
				</div>
				<div className={s.history}>
					<img src="vector/Chevron Right 1.svg" alt=""/>
				  <span className={s.history_parth}>PROJECTS</span>  \ NEW PROJECT \ QUALITY
				</div>
				<div className={s.title_grey}>Variable<span className={s.title}>- First Name</span></div>

				<div className={s.quality_choices}>
					<div className={s.choices_wrap_one}>
						<div className={s.attribute_summary}>
							<div className={s.attribute_summary_title}> Attribute Summary</div>
							<div className={s.attribute_summary_item}>
								<div className={s.records}>
											<div className={s.attribute_title}>85</div>
									<div className={s.attribute_subtitle}>Records</div>
								</div>
								<div className={s.data_type}>
									<div className={s.data_type_title}>String</div>
									<div className={s.data_type_subtitle}>Data type</div>
								</div>
							</div>
						</div>

						<div className={s.frecuency_analysis}>
								<div className={s.frecuency_analysis_title}>Frecuency Analysis
									<img src="vector/Vector_1.svg" alt="" className={s.info_icon}/>
								</div>

							<TableContainer values={rows} style={{paddingLeft: 21}}
							                classes={{progress:classes.progress}}/>

						</div>
					</div>

				<div className={s.choices_wrap_two}>
					<div className={s.count}>
						<div className={s.wrapper_grid}>

							<div className={s.count_title}>Count<img src="vector/Vector_1.svg" alt="" className={s.info_icon}/></div>

							<div className={s.wrap_grid}>
							<div className={s.grid}>
								<div className={s.wrap_progress_correct}>
									<div className={s.progress_correct_left}></div>
									<div className={s.progress_correct_right}></div>

								</div>
								<div className={s.wrap_progress_duplicate}>
									<div className={s.progress_duplicate_left}></div>
									<div className={s.progress_duplicate_right}></div>
								</div>
								<div className={s.wrap_progress_null}>
									<div className={s.progress_null_left}></div>
									<div className={s.progress_null_right}></div>
								</div>
								<div >
									<img src='vector/Vector 31.svg' className={s.vector31}/>
									<img src='vector/Vector 31.svg' className={s.vector32}/>
									<img src='vector/Vector 31.svg' className={s.vector33}/>
									<img src='vector/Vector 31.svg' className={s.vector34}/>
									<img src='vector/Vector 31.svg' className={s.vector35}/>
									<img src='vector/Vector 31.svg' className={s.vector36}/>
								</div>
								<div className={s.num}>
									<div>0%</div>
									<div>20%</div>
									<div>40%</div>
									<div>60%</div>
									<div>80%</div>
									<div>100%</div>
								</div>
							</div>

							</div>
						</div>
						<div className={s.wrapper_resalt}>
							<div className={s.wrap_block_resalt}>
								<div className={s.wrap_correct}>
									<div className={s.wrap_data}>
										<div className={s.circle_correct}></div>
										<div className={s.correct_data}>CORRECT DATA TYPE</div>
									</div>
									<div className={s.correct_number}>21</div>
								</div>
								<div className={s.wrap_incorrect}>
									<div className={s.wrap_data}>
										<div className={s.circle_incorrect}></div>
										<div className={s.correct_data}>INCORRECT DATA TYPE</div>
									</div>
									<div className={s.incorrect_number}>64</div>
								</div>
							</div>
							<div className={s.wrap_block_dup}>
								<div className={s.wrap_dup}>
									<div className={s.wrap_data}>
										<div className={s.circle_dup}></div>
										<div className={s.correct_data}>Duplicate</div>
									</div>
									<div className={s.duplicate_number}>6</div>
								</div>

								<div className={s.wrap_dis}>
									<div className={s.wrap_data}>
										<div className={s.circle_dis}></div>
										<div className={s.correct_data}>Distinct</div>
									</div>
									<div className={s.distinct_number}>58</div>
								</div>
							</div>
							<div className={s.wrap_block_null}>
								<div className={s.wrap_null}>
									<div className={s.wrap_data}>
										<div className={s.circle_null}></div>
										<div className={s.correct_data}>NULL</div>
									</div>
									<div className={s.null_number}>4</div>
								</div>
								<div className={s.wrap_not_null}>
									<div className={s.wrap_data}>
										<div className={s.circle_not_null}></div>
										<div className={s.correct_data}>Not NULL</div>
									</div>
									<div className={s.not_null_number}>54</div>
								</div>
							</div>
						</div>
					</div>
					<div className={s.pattern_analysis}>

						<div className={s.pattern_analysis_title}>Pattern Analysis<img src="vector/Vector_1.svg" alt="" className={s.info_icon}/></div>

						<TableContainer values={rows2} style={{paddingLeft: 26}} classes={{progress:classes.progress}}/>

					</div>
					<div className={s.mask_analysis}>

						<div className={s.mask_analysis_title}>Mask Analysis<img src="vector/Vector_1.svg" alt="" className={s.info_icon}/></div>

						<TableContainer values={rows3} style={{paddingLeft: 26}} classes={{progress:classes.progress}}/>

					</div>
				</div>
			</div>

			</div>

		</Page>

	);
};

export default Quality;




