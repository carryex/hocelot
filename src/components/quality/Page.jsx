import React from 'react';
import s from './Page.module.css';

const menuItems = [
	{
		key: 'home',
		title: 'Home',
		href: 'vector/Home.svg',
	},
	{
		key: 'activity',
		title: 'Activity',
		href: 'vector/Activity.svg',
	},
	{
		key: 'settings',
		title: 'Settings',
		href: 'vector/Setting.svg',
	},
	{
		key: 'chat',
		title: 'Chat',
		href: 'vector/Chat.svg',
	},
];

const Page = (props) => {
	const style = {
		justifyContent: props.justify,
		alignItems: props.align,
		flexDirection: props.direction,
	};
	return (
		<div className={`container`}>
			<div className={s.left_side_menu}>
				<img src="vector/Hocelot Logo.svg" alt="Hocelot Logo" className={s.logo_icon}/>

				{
					menuItems.map(item => (
						<div key={item.key} className={s.menu_item}>
							<div className={s.menu_item_background}/>
							<img src={item.href} alt={item.title}/>
						</div>
					))
				}
			</div>

			<div className={s.content_section} style={style}>
				{props.children}
			</div>
		</div>
	);
};

export default Page;
