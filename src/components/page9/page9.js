import React, { useState } from "react";
import classes from "./App9.module.css";
import Chevron from "./images/Chevron Right 1.png";
import { Menu } from "./components/menu/menu";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import {
  RightBlock,
  RightBlockChooseOne,
  RightBlockRead,
  RightBlockReadError,
} from "./components/rightBlock/rightBox";
import eyeIcon from "./images/eye.svg";
import Block from "./components/block/block";
import { initialBlocksData } from "./static/data";

const Page9 = ({
  fileColumns,
  necessityVariables,
  onChatBotButtonClick,
  chatBotStep,
  currentGroupVariable,
  groupVariables,
  onChoseOneBlockCliked,
  candidateColumns,
  changeSelectedOption,
  chatBotText,
  onButtonClick,
  chatBotNecessity,
  onContinueButtonClick,
  progress,
  chatBotStepCount,
  chatBotCurrentStepProgress,
  chatBotError,
  buttonIsDisabled,
  onCheckBoxClick,
  onEyeClick,
  currentVariable,
  isChatBotStepValid,
}) => {
  // const [blocksData, setBlocksData] = useState(initialBlocksData);
  // const changeSelectedOption = (blockId, newOption) => {
  //   setBlocksData(
  //     blocksData.map((block) => {
  //       if (block.numberColumn === blockId) {
  //         return { ...block, selectedOption: newOption };
  //       }
  //       return block;
  //     })
  //   );
  // };
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
                className={[classes.header_span_first, classes.bold].join(" ")}
              >
                NEW PROJECT
              </div>
            </div>
          </div>
          <div className={classes.blocks_section_wrapper_header}>
            <h2>Sort and edit your CSV columns</h2>
            <span>Help us matching your CSV columns properly.</span>
          </div>

          <div className={classes.blocks_section_wrapper}>
            <span onClick={() => {onEyeClick(currentVariable,currentGroupVariable)}}>
              <img src={eyeIcon} alt="eye" />
              See all columns
            </span>
            <div className={classes.blocks_wrapper}>
              {candidateColumns
                ? candidateColumns.map((block) => (
                    <Block
                      changeSelectedOption={changeSelectedOption}
                      data={block}
                      onButtonClick={onButtonClick}
                    />
                  ))
                : fileColumns.map((block) => (
                    <Block
                      changeSelectedOption={changeSelectedOption}
                      data={block}
                    />
                  ))}
              {}
            </div>
          </div>

          {/* Right blocks */}

          <RightBlock
            chatBotStep={chatBotStep}
            necessityVariables={necessityVariables}
            onChatBotButtonClick={onChatBotButtonClick}
            currentGroupVariable={currentGroupVariable}
            groupVariables={groupVariables}
            onChoseOneBlockCliked={onChoseOneBlockCliked}
            chatBotText={chatBotText}
            chatBotNecessity={chatBotNecessity}
            onContinueButtonClick={onContinueButtonClick}
            progress={progress}
            stepCount={chatBotStepCount}
            currentStepProgress={chatBotCurrentStepProgress}
            chatBotError={chatBotError}
            onCheckBoxClick={onCheckBoxClick}
            buttonIsDisabled={buttonIsDisabled}
            isChatBotStepValid={isChatBotStepValid}
          />
          {/* <RightBlockChooseOne /> */}
          {/* <RightBlockRead /> */}
          {/* <RightBlockReadError /> */}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Page9;
