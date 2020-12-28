import React from 'react';
import Check from "../../images/check 1.png";
import classes from "../../../page7/App7.module.css";

export class Footer extends React.Component {

    render() {
        return (
            <footer>
                <div className={classes.button_footer}>BACK</div>
                <div className={classes.footer_ul}>
                    <div className={[classes.footer_li, classes.active_footer_li].join(' ')}>
                        <span>
                            <span className={classes.check}>
                                <img src={Check} alt="logo" />
                            </span>
                            <span>
                                BUY MATCHER
                                </span>
                        </span>
                        <div className={classes.footer_line} />
                    </div>
                    <div className={[classes.footer_li, classes.active_footer_li].join(' ')}>
                        <span>
                            <span className={classes.check}>
                                <img src={Check} alt="logo" />
                            </span>
                            <span>
                                FINANCIAL <br /> INSTITUTIONS
                            </span>
                        </span>
                        <div className={classes.footer_line} />
                    </div>
                    <div className={[classes.footer_li, classes.active_footer_li].join(' ')}>
                        <span>
                            <span className={classes.check}>
                                <img src={Check} alt="logo" />
                            </span>
                            <span>
                                CREDIT CARDS
                                </span>
                        </span>
                        <div className={classes.footer_line} />
                    </div>
                    <div className={[classes.footer_li, classes.active_footer_li].join(' ')}>
                        <span>
                            <span className={classes.check}>
                                <img src={Check} alt="logo" />
                            </span>
                            <span>
                                PORTFOLIO
                                </span>
                        </span>
                        <div className={classes.footer_line} />
                    </div>
                    <div className={classes.footer_li}>
                        <span>UPLOAD COMPLETE</span>
                        <div className={classes.footer_line} />
                    </div>
                    <div className={classes.footer_li}>
                        <span>SORT COLUMBNS</span>
                        <div className={classes.footer_line} />
                    </div>
                </div>
                <div className={[classes.button_footer, classes.next, classes.active_button].join(' ')}>NEXT</div>
            </footer>
        )
    }
}