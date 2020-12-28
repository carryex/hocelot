import React from 'react';
import Check from "../../images/check 1.png";
import classes from "../../../page4/App4.module.css";

export class Footer extends React.Component {

    render() {
        return (
            <footer>
                <div className={classes.button_footer}>BACK</div>
                <div className={classes.footer_ul}>
                    <div className={classes.footer_li}>
                            <span>
                                BUY MATCHER
                            </span>
                        <div className={classes.footer_line}/>
                    </div>
                    <div className={classes.footer_li}>
                            <span>
                                INDUSTRY
                            </span>
                        <div className={classes.footer_line}/>
                    </div>
                    <div className={classes.footer_li}>
                            <span>
                                PRODUCT
                            </span>
                        <div className={classes.footer_line}/>
                    </div>
                    <div className={classes.footer_li}>
                            <span>
                                YOUR FIRE
                            </span>
                        <div className={classes.footer_line}/>
                    </div>
                    <div className={classes.footer_li}>
                        <span>UPLOAD COMPLETE</span>
                        <div className={classes.footer_line}/>
                    </div>
                    <div className={classes.footer_li}>
                        <span>SORT COLUMBNS</span>
                        <div className={classes.footer_line}/>
                    </div>
                </div>
                <div className={classes.next}>NEXT</div>
            </footer>
        )
    };
}