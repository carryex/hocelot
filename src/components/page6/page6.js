import classes from './App6.module.css';
import Chevron from './images/Chevron Right 1.png';
import Wallet from './images/Wallet.png';
import Wallet2 from './images/Wallet2.png';
import Search1 from './images/Search1.png';
import Search2 from './images/Search2.png';
import Group47 from './images/Group 47.png';
import Group472 from './images/Group 472.png';
import Profile from './images/Profile.png';
import Profile2 from './images/Profile2.png';
import Group48 from './images/Group 48.png';
import Group482 from './images/Group 482.png';
import PaperPlus from './images/Paper Plus.png';
import PaperPlus2 from './images/Paper Plus2.png';
import {Menu} from './components/menu/menu';
import {Header} from './components/header/header';
import {Footer} from './components/footer/footer';
import {ElementUl} from './components/elementUl/elementUl';
import {Component} from "react";


class Page6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeButton1: false,
            activeButton2: false,
            activeButton3: false,
            activeButton4: false,
            activeButton5: false,
            activeButton6: false,
            activeClass: classes.active_content_li, 
            activeElement: null
        }
        this.handleGoForth = this.handleGoForth.bind(this)
        this.handleGoBack = this.handleGoBack.bind(this)
        this.onClick1 = this.onClick1.bind(this)
        this.onClick2 = this.onClick2.bind(this)
        this.onClick3 = this.onClick3.bind(this)
        this.onClick4 = this.onClick4.bind(this)
        this.onClick5 = this.onClick5.bind(this)
        this.onClick6 = this.onClick6.bind(this)
        
    };

    handleGoForth() {
      if (!this.state.activeElement) {
          this.onClick1()
      } else if (this.state.activeElement === 1) {
          this.onClick2()
      } else if (this.state.activeElement === 2) {
        this.onClick3()
      } else if (this.state.activeElement === 3) {
        this.onClick4()
      } else if (this.state.activeElement === 4) {
        this.onClick5()
      } else this.onClick6()
    } 
    handleGoBack() {
        if (this.state.activeElement === 2) {
            this.onClick1()
        } else if (this.state.activeElement === 3) {
            this.onClick2()
        } else if (this.state.activeElement === 4) {
            this.onClick3()
        } else if (this.state.activeElement === 5) {
            this.onClick4()
        } else if (this.state.activeElement === 6) {
            this.onClick5()
        }
    }
    onClick1(){
        this.setState({
            activeButton1: true,
            activeButton2: false,
            activeButton3: false,
            activeButton4: false,
            activeButton5: false,
            activeButton6: false,
            activeElement: 1
        })
    };
    onClick2(){
        this.setState({
            activeButton1: false,
            activeButton2: true,
            activeButton3: false,
            activeButton4: false,
            activeButton5: false,
            activeButton6: false,
            activeElement: 2
        })
    };
    onClick3(){
        this.setState({
            activeButton1: false,
            activeButton2: false,
            activeButton3: true,
            activeButton4: false,
            activeButton5: false,
            activeButton6: false,
            activeElement: 3
        })
    };
    onClick4(){
        this.setState({
            activeButton1: false,
            activeButton2: false,
            activeButton3: false,
            activeButton4: true,
            activeButton5: false,
            activeButton6: false,
            activeElement: 4
        })
    };
    onClick5(){
        this.setState({
            activeButton1: false,
            activeButton2: false,
            activeButton3: false,
            activeButton4: false,
            activeButton5: true,
            activeButton6: false,
            activeElement: 5
        })
    };
    onClick6(){
        this.setState({
            activeButton1: false,
            activeButton2: false,
            activeButton3: false,
            activeButton4: false,
            activeButton5: false,
            activeButton6: true,
            activeElement: 6
        })
    };

    render() {
        
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
                            <span className={classes.header_main}>Select the product</span>
                            <span className={classes.header_main_after}>Which product do you want to focus on? </span>
                        </div>
                        <div className={classes.content_ul}>
                            <ElementUl className={[classes.content_li, !!this.state.activeButton1 && this.state.activeClass].join(' ')} onClick={this.onClick1.bind(this)} src={(!this.state.activeButton1 && Wallet) || (!!this.state.activeButton1 && Wallet2)} text="Buy matcher"/>
                            <ElementUl className={[classes.content_li, !!this.state.activeButton2 && this.state.activeClass].join(' ')} onClick={this.onClick2.bind(this)} src={(!this.state.activeButton2 && Search1) || (!!this.state.activeButton2 && Search2)} text="Financial Institutions"/>
                            <ElementUl className={[classes.content_li, !!this.state.activeButton3 && this.state.activeClass].join(' ')} onClick={this.onClick3.bind(this)} src={(!this.state.activeButton3 && Group47) || (!!this.state.activeButton3 && Group472)} text="Credit cards"/>
                            <ElementUl className={[classes.content_li, !!this.state.activeButton4 && this.state.activeClass].join(' ')} onClick={this.onClick4.bind(this)} src={(!this.state.activeButton4 && Profile) || (!!this.state.activeButton4 && Profile2)} text="Portfolio"/>
                            <ElementUl className={[classes.content_li, !!this.state.activeButton5 && this.state.activeClass].join(' ')} onClick={this.onClick5.bind(this)} src={(!this.state.activeButton5 && Group48) || (!!this.state.activeButton5 && Group482)} text="Car loan"/>
                            <ElementUl className={[classes.content_li, !!this.state.activeButton6 && this.state.activeClass].join(' ')} onClick={this.onClick6.bind(this)} src={(!this.state.activeButton6 && PaperPlus) || (!!this.state.activeButton6 && PaperPlus2)} text="Others"/>
                        </div>
                    </div>
                    <Footer
                     goForth={this.handleGoForth}
                     goBack={this.handleGoBack}
                     activeElement={this.state}
                     onClick1={this.onClick1}
                     onClick2={this.onClick2}
                     onClick3={this.onClick3}
                     onClick4={this.onClick4}
                     onClick5={this.onClick5}
                     onClick6={this.onClick6}
                     />
                </div>
            </div>
        )
    }
}

export default Page6;