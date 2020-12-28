import React, { useCallback, useState } from 'react'
import classes from './App8.module.css'
import Chevron from './images/Chevron Right 1.png'
import Folder from './images/Folder.png'
import Paper from './images/Paper.png'
import { Menu } from './components/menu/menu'
import { Header } from './components/header/header'
import { Footer } from './components/footer/footer'
import { Country } from './components/country/country'
import { useDropzone } from 'react-dropzone'
import RightBlock from './components/rightBlock/rightBox'

function Page8() {
  const [newFile, setNewFile] = useState({})
  const [filesList, setFilesList] = useState([])

  const onDrop = useCallback(
    (acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader()
        setNewFile({ fileName: file.name, progress: 0 })
        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onprogress = (progress) => {
          setNewFile({
            fileName: file.name,
            progress: (progress.loaded / progress.total) * 100,
          })
        }
        reader.onload = () => {
          setNewFile({})
          setFilesList([...filesList, file])
        }
        reader.readAsArrayBuffer(file)
      })
    },
    [filesList]
  )

  const { getRootProps, getInputProps } = useDropzone({ onDrop })

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
            <span className={classes.header_main}>Upload file</span>
            <span className={classes.header_main_after}>
              First select the country of origin of your database and then click
              to find the fire or drag it to this page.
            </span>
          </div>
          <div className={classes.content_ul_upload}>
            <Country />
            <div
              {...getRootProps()}
              className={[classes.content_li_upload, classes.drag].join(' ')}
            >
              <img
                src={Folder}
                className={classes.li_picture_upload}
                alt="logo"
              />
              <p>Drag & Drop your fires here.</p>
              <input {...getInputProps()} />
            </div>
          </div>

          <RightBlock/>
		  
          <div className={classes.upload_div}>
            <div
              className={[classes.li_text_upload, classes.header_upload].join(
                ' '
              )}
            >
              Uploaded files
            </div>
            {newFile.name && (
              <div className={classes.upload_progress_file}>
                <img
                  src={Paper}
                  className={classes.li_picture_upload}
                  alt="logo"
                />
                <div className={classes.upload_progress}>
                  <div
                    className={[
                      classes.li_text_upload,
                      classes.upload_file,
                    ].join(' ')}
                  >
                    <div className={classes.upload_file}>{newFile.name}</div>
                    <div>{newFile.progress}</div>
                  </div>
                  <div className={classes.upload_line} />
                </div>
              </div>
            )}
            {filesList.map((file) => {
              return (
                // file.name + file.lastModified for unique key
                <div
                  key={file.name + file.lastModified}
                  className={classes.upload_progress_file}
                >
                  <img
                    src={Paper}
                    className={classes.li_picture_upload}
                    alt="logo"
                  />
                  <div className={classes.upload_progress}>
                    <div
                      className={[
                        classes.li_text_upload,
                        classes.upload_file,
                      ].join(' ')}
                    >
                      <div className={classes.upload_file}>{file.name}</div>
                      <div>100%</div>
                    </div>
                    <div className={classes.upload_line} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Page8
