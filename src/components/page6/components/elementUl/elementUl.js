import React from 'react';
import classes from "../../App6.module.css";

export class ElementUl extends React.Component {

    render() {
        return (
            <div className={this.props.className} id={this.props.id} onClick={this.props.onClick}>
                <div className={classes.li_text}>
                    {this.props.text}
                </div>
                <div className={classes.li_picture_main_div}>
                    <div className={classes.li_picture_div}>
                        <img className={classes.li_picture} src={this.props.src}  alt="logo"/>
                    </div>
                </div>
            </div>
        )
    };
}