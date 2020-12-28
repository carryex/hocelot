import classes from './App1.module.css';
import Logo from './images/HocelotLogo.png';
import Activity from './images/Activity.png';
import Discount from './images/Discount.png';
import Chart from './images/Chart.png';
import Graph from './images/Graph.png';
import Google from './images/Google.png';
import Linkedin from './images/Linkedin.png';
import Message from './images/Message.png';
import Lock from './images/Lock.png';
import Play from './images/Play.png';
import {Component} from "react/cjs/react.production.min";

class Page1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeButton1: true,
            activeButton2: false,
            activeButton3: false,
            activeClass: classes.active_scroll_item
        };

        if (!this.state.activeButton1){
            this.state.activeButton = false
        }
        if (!this.state.activeButton2){
            this.state.activeButton = false
        }
        if (!this.state.activeButton3){
            this.state.activeButton = false
        }
    };

    onClick1(){
        this.setState({
            activeButton1: true,
            activeButton2: false,
            activeButton3: false
        })
    };
    onClick2(){
        this.setState({
            activeButton1: false,
            activeButton2: true,
            activeButton3: false
        })
    };
    onClick3(){
        this.setState({
            activeButton1: false,
            activeButton2: false,
            activeButton3: true
        })
    };

    render() {
        return (
            <div className={classes.app}>
                <div className={classes.information}>
                    <img src={Logo} className={classes.logo} alt="logo"/>
                    {!!this.state.activeButton1 && <div className={classes.left_block}>
                        <div className={classes.text}>
                            Just a few clicks away from improving your data thanks to our products
                        </div>
                        <div className={classes.preferences}>
                            <div className={classes.preference}>
                                <img src={Activity} className={classes.logo_preference} alt="logo"/>
                                Dynamic Risk Modeler
                            </div>
                            <div className={classes.preference}>
                                <img src={Discount} className={classes.logo_preference} alt="logo"/>
                                Fraud Buster
                            </div>
                            <div className={classes.preference}>
                                <img src={Chart} className={classes.logo_preference} alt="logo"/>
                                Collection Buster
                            </div>
                            <div className={classes.preference}>
                                <img src={Graph} className={classes.logo_preference} alt="logo"/>
                                Buy Matcher
                            </div>
                        </div>
                    </div>}
                    {!!this.state.activeButton2 && <div className={classes.left_block}>
                        <div className={classes.text_video}>
                            The real-time augmented analytics platform that maximizes your business’ results.
                        </div>
                        <div className={classes.video}>
                            <img src={Logo} className={[classes.logo, classes.video_logo].join(' ')} alt="logo"/>
                            <img src={Play} className={classes.logo_play} alt="logo"/>
                        </div>
                    </div>}
                    {!!this.state.activeButton3 && <div className={classes.left_block}>
                        <div className={classes.text_third}>
                            <span>We are an augmented analytics company that&nbsp;</span>
                            <span className={classes.bold}>uses big data and information in real time&nbsp;</span>
                            <span>to develop&nbsp;</span>
                            <span className={classes.bold}>predictive models and solve business needs.</span>
                        </div>
                    </div>}
                    <div className={classes.scroll}>
                        <div className={[classes.scroll_item, !!this.state.activeButton1 && this.state.activeClass].join(' ')} onClick={this.onClick1.bind(this)}/>
                        <div className={[classes.scroll_item, !!this.state.activeButton2 && this.state.activeClass].join(' ')} onClick={this.onClick2.bind(this)}/>
                        <div className={[classes.scroll_item, !!this.state.activeButton3 && this.state.activeClass].join(' ')} onClick={this.onClick3.bind(this)}/>
                    </div>
                </div>
                <div className={classes.login}>
                    <div className={classes.login_in}>
                        <div className={classes.buttons_in}>
                            <div className={classes.google_button}>
                                <img src={Google} className={classes.logo_button} alt="logo"/>
                                Google
                            </div>
                            <div className={classes.linkedin_button}>
                                <img src={Linkedin} className={classes.logo_button} alt="logo"/>
                                Linkedin
                            </div>
                        </div>
                        <div className={classes.or}>OR</div>
                        {/* <div className={classes.mail}>
                            <img src={Message} className={classes.logo_mail} alt="logo"/>
                            <input className={classes.input_mail} placeholder="Email"/>
                        </div>
                        <div className={classes.password}>
                            <img src={Lock} className={classes.logo_lock} alt="logo"/>
                            <input className={classes.input_password} placeholder="Password"/>
                        </div>
                        <div className={classes.under_password}>
                            <span className={classes.span_under_password}>Forgot password?</span>
                            <a className={classes.a_under_password}>CLICK HERE</a>
                        </div>
                        <div className={classes.login_button}>Log in</div> */}
                        <iframe className={classes.iframe} src="http://localhost:8080/auth/realms/master/protocol/openid-connect/auth?client_id=security-admin-console&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fauth%2Fadmin%2Fmaster%2Fconsole%2F%23%2Frealms%2Fmaster%2Fdefense%2Fheaders&state=ac40dfd6-0de0-4e23-8b3a-967c0e49703d&response_mode=fragment&response_type=code&scope=openid&nonce=926396ac-cd1a-4c09-9579-c69f6f943506&code_challenge=DFP0nAIyUnzVLRwNKe8wzEacMgpWX4dT0LyzAgxg3V4&code_challenge_method=S256"></iframe>
                        <div className={classes.under_login_button}>
                            <span className={classes.span_under_password}>Don´t have an account yet?</span> 
                            <a className={[classes.a_under_password, classes.a_under_login_button].join(' ')} href="register">CREATE ACCOUNT</a>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Page1;
