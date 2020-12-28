import React from 'react'
import classes from './App10.module.css'
import Chevron from './images/Chevron Right 1.png'
import { Menu } from './components/menu/menu'
import { Header } from './components/header/header'
import { Footer } from './components/footer/footer'
import editIcon from './images/edit_icon.svg'
import arrowRight from './images/arrow_right.svg'

function Page10() {
  return (
    <div className={classes.app}>
      <Menu />
      <div className={classes.content_main}>
        <Header />
        <div className={classes.content}>
          <div className={classes.main_text}>
            <div className={classes.header_text}>
              <img src={Chevron} className={classes.arrow_header} alt="logo" />
              <span className={classes.header_span_first}>
                PROJECTS \&nbsp;
              </span>
              <div
                className={[classes.header_span_first, classes.bold].join(' ')}
              >
                NEW PROJECT
              </div>
            </div>
          </div>
          
          <div className={classes.save_project_wrapper} >
            <div className={classes.project_create} >
              <img src={editIcon} alt='edit' />
              <h2>Project successfully created!</h2>
              <span>Name your project or skip to the dashboard.</span>
            </div>
            <div className={classes.project_name} >
              <label>
                Project name:
                <input />
              </label>
              <button className={classes.save_project_button} >
                Save
              </button>
            </div>
          </div>
          <button className={[classes.save_project_button, classes.skip_button].join(' ')} >
            Skip 
            <img src={arrowRight} alt='arrow-right' />
          </button>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Page10
