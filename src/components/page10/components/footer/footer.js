import React from 'react';
import Check from "../../images/check 1.png";
import classes from "../../App10.module.css";

export class Footer extends React.Component {

    render() {
        return (
            <footer>
                <div className={classes.button_footer}>BACK</div>
                <div className={classes.footer_ul}>
                    <div className={[classes.footer_li, classes.active_footer_li].join(' ')}>
                            <span>
                                <img src={Check} alt="logo"/>
                                BUY MATCHER
                            </span>
                        <div className={classes.footer_line}/>
                    </div>
                    <div className={[classes.footer_li, classes.active_footer_li].join(' ')}>
                            <span>
                                <img src={Check} alt="logo"/>
                                FINANCIAL INSTITUTIONS
                            </span>
                        <div className={classes.footer_line}/>
                    </div>
                    <div className={[classes.footer_li, classes.active_footer_li].join(' ')}>
                            <span>
                                <img src={Check} alt="logo"/>
                                CREDIT CARDS
                            </span>
                        <div className={classes.footer_line}/>
                    </div>
                    <div className={[classes.footer_li, classes.active_footer_li].join(' ')}>
                            <span>
                                <img src={Check} alt="logo"/>
                                PORTFOLIO
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
                <div className={[classes.button_footer, classes.next].join(' ')}>NEXT</div>
            </footer>
        )
    }
}