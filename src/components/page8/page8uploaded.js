import React, { useCallback, useState } from 'react'
import classes from './App8.module.css'
import Chevron from './images/Chevron Right 1.png'
import Folder from './images/Folder.png'
import Paper from './images/Paper.png'
import { Menu } from './components/menu/menu'
import { Header } from './components/header/header'
import { Footer } from './components/footer/footer'
import fileUploadedImg from './images/file_uploaded.png'

function Page8Uploaded() {
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
          <div className={classes.upload_completed}>
              <img src={fileUploadedImg} alt=""/>
              <h3>Upload Completed</h3>
              <span>File uploaded succesfully.</span>
            </div> 
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Page8Uploaded
