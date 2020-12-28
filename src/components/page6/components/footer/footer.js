import React from 'react';
import Check from "../../images/check 1.png";
import classes from "../../../page6/App6.module.css";

export class Footer extends React.Component {

    render() {
        return (
            <footer>
                <div onClick={() => this.props.goBack()} className={classes.button_footer}>BACK</div>
                <div className={classes.footer_ul}>
                    <div onClick={() => this.props.onClick1()} className={[classes.footer_li, this.props.activeElement.activeButton1 && classes.active_footer_li].join(' ')}>
                        <span>
                            <img src={Check} alt="logo" />
                                BUY MATCHER
                            </span>
                        <div className={classes.footer_line} />
                    </div>
                    <div onClick={() => this.props.onClick2()} className={[classes.footer_li, this.props.activeElement.activeButton2 && classes.active_footer_li].join(' ')}>
                    <span>
                            <span className={classes.check}>
                                <img src={Check} alt="logo"/>
                            </span>
                            <span>
                                FINANCIAL <br /> INSTITUTIONS
                            </span>
                            </span>
                        <div className={classes.footer_line} />
                    </div>
                    <div onClick={() => this.props.onClick3()} className={[classes.footer_li, this.props.activeElement.activeButton3 && classes.active_footer_li].join(' ')}>
                        <span>
                            CREDIT CARDS
                            </span>
                        <div className={classes.footer_line} />
                    </div>
                    <div onClick={() => this.props.onClick4()} className={[classes.footer_li, this.props.activeElement.activeButton4 && classes.active_footer_li].join(' ')}>
                        <span>
                            PORTFOLIO
                            </span>
                        <div className={classes.footer_line} />
                    </div>
                    <div onClick={() => this.props.onClick5()} className={[classes.footer_li, this.props.activeElement.activeButton5 && classes.active_footer_li].join(' ')}>
                        <span>
                            CAR LOAN
                            </span>
                        <div className={classes.footer_line} />
                    </div>
                    <div onClick={() => this.props.onClick6()} className={[classes.footer_li, this.props.activeElement.activeButton6 && classes.active_footer_li].join(' ')}>
                        <span>
                            OTHERS
                        </span>
                        <div className={classes.footer_line} />
                    </div>
                </div>
                <div onClick={() => this.props.goForth()} className={[classes.next, classes.active_button].join(' ')}>NEXT</div>
            </footer>
        )
    };
}