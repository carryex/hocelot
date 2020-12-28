import React from 'react';
import classes from "../../App7.module.css";

export class ElementUl extends React.Component {

    render() {
        return (
            <a className={this.props.className} href={this.props.href}>
                <div className={classes.li_text}>
                    {this.props.text}
                </div>
                <img src={this.props.src} className={classes.li_picture} alt="logo"/>
            </a>
        )
    };
}