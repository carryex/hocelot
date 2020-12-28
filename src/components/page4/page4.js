import classes from './App4.module.css';
import Chevron from './images/Chevron Right 1.png';
import Info from './images/Info.png';
import Path1 from './images/Path1.png';
import Path_34168 from './images/Path_34168.png';
import Fill1 from './images/Fill 1.png';
import Chart2 from './images/Chart2.png';
import {Menu} from './components/menu/menu';
import {Header} from './components/header/header';
import {Footer} from './components/footer/footer';



function page4() {
    return (
        <div className={classes.app}>
            <Menu/>
            <div className={classes.content_main}>
                <Header/>
                <div className={classes.content}>
                    <div className={classes.main_text}>
                        <div className={classes.header_text}>
                            <img src={Chevron} className={classes.arrow_header} alt="logo"/>
                            <span className={classes.header_span_first}>PROJECTS \&nbsp;</span>
                            <div className={[classes.header_span_first, classes.bold].join(' ')}>NEW PROJECT</div>
                        </div>
                        <span className={classes.header_main}>What can we do for you?</span>
                        <span className={classes.header_main_after}>Improve results during all potential and real customer life cycle.</span>
                    </div>
                    <div className={classes.content_ul}>
                        <div className={classes.content_li}>
                            <div className={classes.info_div}>
                                <img src={Info} className={classes.info} alt="logo"/>
                            </div>
                            <div className={classes.content_li_header}>
                                <span className={classes.header_li}>Buy Matcher</span>
                                <span className={classes.header_li_after}>Increases conversion rate during sales cylcle.</span>
                                <img src={Path1} className={classes.li_back_picture} alt="logo"/>
                            </div>
                            <div className={classes.text_into_div}>
                                <div className={classes.line}/>
                                <span className={[classes.content_li_header_after, classes.bold].join(' ')}>Do you want to sell more?</span>
                                <span className={classes.content_li_header_after}>Locate your customers with a higher purchase propensity</span>
                            </div>
                            <div className={classes.text_into_div}>
                                <div className={classes.line}/>
                                <span className={[classes.content_li_header_after, classes.bold].join(' ')}>Do you want to spend less?</span>
                                <span className={classes.content_li_header_after}>Change your strategy with your low purchase propensity customers</span>
                            </div>
                            <div className={classes.text_into_div}>
                                <div className={classes.line}/>
                                <span className={[classes.content_li_header_after, classes.bold].join(' ')}>Do you want to sell better?</span>
                                <span className={classes.content_li_header_after}>Accept well, impact better</span>
                            </div>
                        </div>
                        <div className={classes.content_li}>
                            <div className={classes.info_div}>
                                <img src={Info} className={classes.info} alt="logo"/>
                            </div>
                            <div className={classes.content_li_header}>
                                <span className={classes.header_li}>Dynamic Risk Modeler</span>
                                <span className={classes.header_li_after}>Default catch during adminssion</span>
                                <img src={Path_34168} className={classes.li_back_picture} alt="logo"/>
                            </div>
                            <div className={classes.text_into_div}>
                                <div className={classes.line}/>
                                <span className={[classes.content_li_header_after, classes.bold].join(' ')}>Do you want to accept better?</span>
                                <span className={classes.content_li_header_after}>Optimize wrongly denied operations</span>
                            </div>
                            <div className={classes.text_into_div}>
                                <div className={classes.line}/>
                                <span className={[classes.content_li_header_after, classes.bold].join(' ')}>Want to deny better?</span>
                                <span className={classes.content_li_header_after}>Reduce default levels</span>
                            </div>
                            <div className={classes.text_into_div}>
                                <div className={classes.line}/>
                                <span className={[classes.content_li_header_after, classes.bold].join(' ')}>Want to deny better?</span>
                                <span className={classes.content_li_header_after}>Strike maximum return by operations</span>
                            </div>
                        </div>
                        <div className={classes.content_li}>
                            <div className={classes.info_div}>
                                <img src={Info} className={classes.info} alt="logo"/>
                            </div>
                            <div className={classes.content_li_header}>
                                <span className={classes.header_li}>Fraud Buster</span>
                                <span className={classes.header_li_after}>Detects and prevents from fraudulent requests during approval</span>
                                <img src={Fill1} className={classes.li_back_picture} alt="logo"/>
                            </div>
                            <div className={classes.text_into_div}>
                                <div className={classes.line}/>
                                <span className={[classes.content_li_header_after, classes.bold].join(' ')}>Do you want to reduce phishing fraud?</span>
                                <span className={classes.content_li_header_after}>Avoid fake customers</span>
                            </div>
                            <div className={classes.text_into_div}>
                                <div className={classes.line}/>
                                <span className={[classes.content_li_header_after, classes.bold].join(' ')}>Want to deny better? </span>
                                <span className={classes.content_li_header_after}>Avoid data inconsistency</span>
                            </div>
                            <div className={classes.text_into_div}>
                                <div className={classes.line}/>
                                <span className={[classes.content_li_header_after, classes.bold].join(' ')}>Do you want to sell better?</span>
                                <span className={classes.content_li_header_after}>Strike maximum benefit by operation</span>
                            </div>
                        </div>
                        <div className={classes.content_li}>
                            <div className={classes.info_div}>
                                <img src={Info} className={classes.info} alt="logo"/>
                            </div>
                            <div className={classes.content_li_header}>
                                <span className={classes.header_li}>Collection Booster</span>
                                <span className={classes.header_li_after}>Imprivers recoverty procedure</span>
                                <img src={Chart2} className={classes.li_back_picture} alt="logo"/>
                            </div>
                            <div className={classes.text_into_div}>
                                <div className={classes.line}/>
                                <span className={[classes.content_li_header_after, classes.bold].join(' ')}>Want to collect better?</span>
                                <span className={classes.content_li_header_after}>Implement a strategy to increase operating benefit</span>
                            </div>
                            <div className={classes.text_into_div}>
                                <div className={classes.line}/>
                                <span className={[classes.content_li_header_after, classes.bold].join(' ')}>Do you want to recover more?</span>
                                <span className={classes.content_li_header_after}>Focus your highest contactability VS collectability rate customers</span>
                            </div>
                            <div className={classes.text_into_div}>
                                <div className={classes.line}/>
                                <span className={[classes.content_li_header_after, classes.bold].join(' ')}>Do you want to spend less?</span>
                                <span className={classes.content_li_header_after}>Change your strategy with low collectability rate customers</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default page4;
