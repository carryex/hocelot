import React from 'react';
import classes from "../../App5.module.css";

export class ElementUl extends React.Component {

    render() {
        return (
            <div onClick={this.props.onClick} className={this.props.className}>
                <div className={classes.li_text}>
                    {this.props.text}
                </div>
                <img src={this.props.src} className={classes.li_picture} alt="logo"/>
            </div>
        )
    };
}