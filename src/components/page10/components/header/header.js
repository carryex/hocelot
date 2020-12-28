import React from 'react';
import Vector from "../../images/Vector.png";
import Notification from "../../images/notification 1.png";
import User from "../../images/User.png";
import classes from "../../App10.module.css";

export class Header extends React.Component {

    render() {
        return (
            <header>
                <img src={Vector} className={classes.vector_header} alt="logo"/>
                <input className={classes.input_header} placeholder="Type to search"/>
                <img src={Notification} className={classes.Notification_header} alt="logo"/>
                <img src={User} className={classes.user_header} alt="logo"/>
            </header>
        )
    }
}