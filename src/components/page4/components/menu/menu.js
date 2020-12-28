import React from 'react';
import Logo from "../../images/O.png";
import Home from "../../images/Home.png";
import Path from "../../images/Path.png";
import Setting from "../../images/Setting.png";
import Chat from "../../images/Chat.png";
import classes from './menu.module.css';

export class Menu extends React.Component {

    render() {
        return (
            <div className={classes.menu_home}>
                <img src={Logo} className={classes.logo} alt="logo"/>
                <div className={[classes.button_menu, classes.active].join(' ')}/>
                <img src={Home} className={classes.logo_menu_first} alt="logo"/>
                <div className={classes.button_menu}/>
                <img src={Path} className={classes.logo_menu} alt="logo"/>
                <div className={classes.button_menu}/>
                <img src={Setting} className={classes.logo_menu} alt="logo"/>
                <div className={classes.button_menu}/>
                <img src={Chat} className={classes.logo_menu} alt="logo"/>
            </div>
        )
    }
}