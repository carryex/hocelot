import React from 'react';
import Location from "../../images/Location.png";
import classes from "../../App8.module.css";

export class Country extends React.Component {

    render() {
        return (
            <div className={classes.content_li_upload}>
                <div className={[classes.li_text_upload, classes.left_button_text].join(' ')}>
                    <img src={Location} className={classes.li_picture_location} alt="logo"/>
                    Select your database country
                </div>
                <form method="post" action="#">
                    <div>
                        <input type="checkbox" name="option1" value="a1" defaultChecked/> Spain
                    </div>
                    <div>
                        <input type="checkbox" name="option2" value="a2"/>Germany
                    </div>
                    <div>
                        <input type="checkbox" name="option2" value="a2"/>Belgium
                    </div>
                    <div>
                        <input type="checkbox" name="option2" value="a2"/>France
                    </div>
                    <div>
                        <input type="checkbox" name="option2" value="a2"/>Italy
                    </div>
                    <div>
                        <input type="checkbox" name="option2" value="a2"/>Mexico
                    </div>
                    <div>
                        <input type="checkbox" name="option2" value="a2"/>Colombia
                    </div>
                    <div>
                        <input type="checkbox" name="option2" value="a2"/>Chile
                    </div>
                    <div>
                        <input type="checkbox" name="option2" value="a2"/>Peru
                    </div>
                </form>
            </div>
        )
    };
}