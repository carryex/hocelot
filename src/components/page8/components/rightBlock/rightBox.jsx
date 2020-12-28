import React from 'react'
import { Link } from 'react-router-dom'
import classes from './rightBlock.module.css'
import { requiredDataBlocks } from '../../static/data'

const RightBlock = () => {
  return (
    <div className={classes.right_block}>
      <DownloadTemplate />
      <RequiredData />
    </div>
  )
}

const DownloadTemplate = () => {
  return (
    <div className={classes.download_info}>
      <div className={classes.download_info_header}>
        Do you need our .CSV template?
      </div>
      <div className={classes.download_info_header_after}>
        <span>Download</span>&nbsp;
        <Link className={classes.download_info_a}>here</Link>&nbsp;
        <span>our .csv template to speed up the process.</span>
      </div>
    </div>
  )
}

const RequiredData = () => {
  return (
    <div className={classes.required_data}>
      <h2 className={classes.required_data_h2}>
        Data required for uploading the dataset:
      </h2>
      <div className={classes.required_data_block_wrapper} >
        {requiredDataBlocks.map((block) => (
          <RequiredDataBlock block={block} />
        ))}
      </div>
    </div>
  )
}

const RequiredDataBlock = ({ block }) => {
  return (
    <div className={classes.required_data_block} >
      <div className={classes.required_data_block_content}>
        <span>{block.title}</span>
        <ul className={`${classes.required_data_block_list} ${block.items.length > 2 ? classes.required_data_block_list__row : classes.required_data_block_list__column}`} >
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default RightBlock
