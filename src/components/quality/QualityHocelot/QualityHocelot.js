import React from 'react';
import Page from '../Page';
import s from './QualityHocelot.module.css';
import Header from '../Header/Header';
import LinearProgressWithLabel from "../LinearProgress/LinearProgress";
import ChartWithLabel from "../ChartWithLabel/ChartWithLabel";
import DoubleChart from "../DoubleChart/DoubleChart";

const blocks = [
	{
		title: 'Geo Location',
		values: [
			{ label: 'GeoCheck OK', progress: 27 },
			{ label: 'GeoCheck KO', progress: 46, },
		]
	},
	{
		title: 'Identity Verifycation',
		values: [
			{ label: 'IdCheck OK', progress: 47 },
			{ label: 'IdCheck KO', progress: 16 },
		]
	},
	{
		title: 'Phone',
		values: [
			{ label: 'Reachable OK', progress: 62 },
			{ label: 'Reachable KO', progress: 71 },
		]
	},
	{
		title: 'Email',
		values: [
			{ label: 'Reachable OK', progress: 37 },
			{ label: 'Reachable KO', progress: 56 },
		]
	},
	{
		title: 'Age',
		values: [
			{ label: 'Legal age', progress: 37 },
			{ label: 'Underage status', progress: 56 },
		]
	}

];
const pantallaItems = ['Dashboard','Quality','Hocelot Quality','Enrichment','Model','Business case'];

const QualityHocelot = () => {
	return (
		<Page direction="column" justify="space-between">
			<Header/>

			<div className={s.content}>
					<div className={s.pantalla_items}>
						{
							pantallaItems.map(item => (
								<div key={item} className={s.pantalla_item}>{item}</div>
							))
						}
											</div>
				<div className={s.history}>
					<img src="vector/Chevron Right 1.svg" alt=""/>
					<span className={s.history_parth}>PROJECTS</span> \ NEW PROJECT \ QUALITY
				</div>
				<div className={s.title}>Project_Name.csv</div>

				<div className={s.wrap_edit}>
					<div className={s.title_edit}>yourCSVfile.csv</div>
					<div className={s.button_edit}>
						<div className={s.button_title}>Edit Columns</div>
					</div>
				</div>

				<div className={s.wrap_content}>
					<div className={s.wrap_variables}>
						<div className={s.variables_title}>
							Variables
						</div>
						<div className={s.wrap_name_row}>
							<div className={s.wrap_name}>

								<div className={s.normalized_names}>
									<img src='img/Profile_1.png'/>
									<div className={s.normalized_names_title}>Normalized Names</div>
								</div>
								<div className={s.normalized_number}>89%</div>
							</div>

							<div className={s.wrap_addresses}>
								<div className={s.normalized_adresses}>
									<img src='img/Home.png'/>
									<div className={s.normalized_adresses_title}>Normalized Addresses</div>
								</div>
								<div className={s.normalized_adresses_number}>70%</div>
							</div>
						</div>

						<div className={s.wrap_cumple_row}>
							<div className={s.wrap_birth_name}>
								<div className={s.birth_names}>
									<img src='vector/Birth.svg'/>
									<div className={s.birth_names_title}>Normalized Birth Dates</div>
								</div>
								<div className={s.birth_number}>78%</div>
							</div>

							<div className={s.wrap_phone}>
								<div className={s.normalized_phone}>
									<img src='vector/Calling.svg'/>
									<div className={s.normalized_phone_title}>Normalized Phone Numbers</div>
								</div>
								<div className={s.normalized_phone_number}>54%</div>
							</div>
						</div>
						<div className={s.wrap_verification}>
							<div className={s.wrap_title}>Verification error</div>
							<div className={s.wrap_group}>
								<div className={s.wrap_emails}>
									<ChartWithLabel
										value={32}
										total={3.092}
										title="Emails"
										size={88}
										width={10}
									/>
								</div>
								<div className={s.wrap_emails}>
									<ChartWithLabel
										value={56}
										total={2.987}
										title="Phones"
										size={88}
										width={10}
									/>
								</div>
							</div>
						</div>
						<div className={s.wrap_verification}>
							<div className={s.wrap_title}>Validated error</div>
							<div className={s.wrap_group}>
								<div className={s.wrap_emails}>
									<ChartWithLabel
										value={12}
										total={3.092}
										title="Emails"
										size={88}
										width={10}
									/>
								</div>
								<div className={s.wrap_emails}>
									<ChartWithLabel
										value={45}
										total={2.987}
										title="Phones"
										size={88}
										width={10}
									/>
								</div>
							</div>
						</div>

					</div>

					<div className={s.wrap_total_records}>
						<div className={s.wrap_total_records_title}>
							<div className={s.total_records_title}>
								Total Records
							</div>
							<div className={s.wrap_total_records_count}>
								<div className={s.total_records_count}>40.000</div>
								<div className={s.total_records}>Records</div>
							</div>
						</div>
						<div className={s.total_records_diagramma}>
							<div className={s.records_diagramma}>

								<DoubleChart
									size={225}
									width={10}
									values={[ { title: 'Total analyzed', value: 80 }, { value: 65 } ]}
									colors={[ [ '#0D4097', 'transparent' ], [ '#347AE6', 'transparent' ] ]}
								/>

							</div>
						</div>
						<div className={s.wrap_analyzed}>
							<div className={s.wrap_total_analyzed}>
								<img src='vector/Ellipse 717.svg'/>
								<div className={s.useful_records_text}>Total analyzed</div>
							</div>
							<div className={s.wrap_useful_records}>
								<img src='vector/Vector_i.svg'/>
								<div className={s.useful_records_text}>Useful records</div>
							</div>
						</div>
					</div>

					<div style={{ display: 'flex', flexDirection: 'column' }}>
						{
							blocks.map(block => {
								return (          <div key={block.title} style={{ marginBottom: 20 }} className={s.wrap_geo_localion}>
									<div className={s.geo_localion_grafica}>

										<div className={s.title_grafica}>{block.title}</div>
										{
											block.values.map((value, index) => {
												return (
													<div style={{marginBottom:index?0:11}} key={value.label}>
														<div style={{marginBottom:5}} htmlFor="">{value.label}</div>
														<LinearProgressWithLabel
															classes={{root: s.progress_root, label:s.label, bar: s[ `bar${index + 1}` ] }} value={value.progress} units="%"/>
													</div>)
											})
										}
									</div>
								</div> )
							})
						}
					</div>
				</div>
			</div>
		</Page>

	);
};

export default QualityHocelot;




