import classes from './App7.module.css';
import Chevron from './images/Chevron Right 1.png';
import PaperPlus1 from './images/Paper Plus1.png';
import Group481 from './images/Group 481.png';
import {Menu} from './components/menu/menu';
import {Header} from './components/header/header';
import {Footer} from './components/footer/footer';
import {ElementUl} from './components/elementUl/elementUl';


function page7() {
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
                        <span className={classes.header_main}>Select your file</span>
                        <span className={classes.header_main_after}>Do you have a database or do you want to create it from scratch?</span>
                    </div>
                    <div className={classes.content_ul}>
                        <ElementUl className={classes.content_li} src={Group481} text="New" href={'/new'}/>
                        <ElementUl className={[classes.content_li, classes.active_content_li].join(' ')} src={PaperPlus1} text="Portfolio"/>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default page7;
