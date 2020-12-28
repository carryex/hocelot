import classes from './App2.module.css';
import Logo from './images/HocelotLogo.png';
import Profile from './images/Profile.png';
import Lock from './images/Lock.png';
import Message from './images/Message.png';


function page2() {
    return (
        <div className={classes.app}>
            <img src={Logo} className={classes.logo} alt="logo"/>
            <div className={classes.signup}>
                <div className={classes.header_info}>
                    <span className={classes.header_info_span}>ALREADY A USER?</span>
                    <div className={classes.line_header}/>
                    <a className={classes.header_login_button} href="/login">LOG IN</a>
                </div>
                <div className={classes.signup_div}>
                    <div className={classes.signup_in}>
                        <div className={classes.header_form}>
                            <span className={classes.header_form_span}>SIGN UP WHITH&ensp;</span>
                            <span className={[classes.header_form_span, classes.bold].join(' ')}>HOCELOT</span>
                        </div>
                        <div className={classes.mail}>
                            <img src={Profile} className={classes.logo_mail} alt="logo"/>
                            <input className={classes.input_mail} placeholder="First name"/>
                        </div>
                        <div className={classes.mail}>
                            <img src={Profile} className={classes.logo_mail} alt="logo"/>
                            <input className={classes.input_mail} placeholder="Last name"/>
                        </div>
                        <div className={classes.mail}>
                            <img src={Message} className={classes.logo_mail} alt="logo"/>
                            <input className={classes.input_mail} placeholder="Email"/>
                        </div>
                        <div className={classes.mail}>
                            <img src={Lock} className={classes.logo_mail} alt="logo"/>
                            <input className={classes.input_mail} placeholder="Create Password"/>
                        </div>
                        <div className={classes.mail}>
                            <img src={Lock} className={classes.logo_mail} alt="logo"/>
                            <input className={classes.input_mail} placeholder="Confirm your password"/>
                        </div>
                        <div className={classes.under_password}>
                            <p className={classes.span_under_password}>
                                By clicking Create Account, you agree to the Hocelot’s &nbsp;
                                <a className={classes.a_under_password}>Terms of Use Privacity Policy &nbsp;</a>
                                and &nbsp;
                                <a className={classes.a_under_password}>Cookie Policity.</a>
                            </p>
                        </div>
                        <div className={classes.login_button}>Create account</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default page2;