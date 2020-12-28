import React from 'react';
import s from './Header.module.css';


const Header = (props) => {
	return (
		<div className={s.header}>
			<div className={s.search}>
				<img src="vector/Vector (3).svg"/>
				<input type="text" placeholder="Type to search"/>
			</div>
			<div className={s.profile_section}>
				<img src="img/notification 1.png" className={s.notification_icon}/>
				<img src="img/User.png" className={s.profile_icon}/>
			</div>
		</div>
	);
};

export default Header;
