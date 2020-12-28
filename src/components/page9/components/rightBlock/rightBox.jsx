import React, { useEffect, useState } from "react";
import classes from "./rightBlock.module.css";
import { requiredDataBlocks } from "../../static/data";
import errorImg from "../../images/error.svg";

// requiredData.type = requiredInfo | chooseOne | none

export const RightBlock = ({
  necessityVariables,
  onChatBotButtonClick,
  chatBotStep,
  currentGroupVariable,
  groupVariables,
  onChoseOneBlockCliked,
  chatBotText,
  chatBotNecessity,
  onContinueButtonClick,
  progress,
  stepCount,
  currentStepProgress,
  chatBotError,
  buttonIsDisabled,
  onCheckBoxClick,
  isChatBotStepValid,
}) => {
  return (
    <>
      {chatBotStep === "requiredInfo" ? (
        <div className={classes.right_block}>
          <BlockHeader progress={0} />
          <RequiredData
            type={chatBotStep}
            text={chatBotText}
            necessityVariables={necessityVariables}
            onChatBotButtonClick={onChatBotButtonClick}
            groupVariables={groupVariables}
          />
        </div>
      ) : (
        // ) : chatBotStep === "chooseOne" ? (
        //   <RightBlockChooseOne
        //     text={chatBotText}
        //     currentGroupVariable={currentGroupVariable}
        //     onChoseOneBlockCliked={onChoseOneBlockCliked}
        //   />
        // ) : (
        //   <>
        //     <ReadBlock />
        //     <BackOrContinueButtons />
        //   </>
        <RightBlockChooseOne
          text={chatBotText}
          currentGroupVariable={currentGroupVariable}
          onChoseOneBlockCliked={onChoseOneBlockCliked}
          chatBotStep={chatBotStep}
          chatBotNecessity={chatBotNecessity}
          onContinueButtonClick={onContinueButtonClick}
          groupVariables={groupVariables}
          necessityVariables={necessityVariables}
          stepCount={stepCount}
          currentStepProgress={currentStepProgress}
          progress={progress}
          error={chatBotError}
          onCheckBoxClick={onCheckBoxClick}
          buttonIsDisabled={buttonIsDisabled}
          isChatBotStepValid={isChatBotStepValid}
        />
      )}

      {/* <RequiredData
        type={chatBotStep}
        text={
          "We need you to tell us in which columns you have the following inputs so that the data quality is as excellent as possible:"
        }
        necessityVariables={necessityVariables}
        onChatBotButtonClick={onChatBotButtonClick}
      /> */}
      <Dots />
    </>
  );
};

export const RightBlockChooseOne = ({
  currentGroupVariable,
  onChoseOneBlockCliked,
  text,
  chatBotStep,
  chatBotNecessity,
  onContinueButtonClick,
  groupVariables,
  necessityVariables,
  stepCount,
  progress,
  currentStepProgress,
  error,
  onCheckBoxClick,
  buttonIsDisabled,
  isChatBotStepValid,
}) => {
  return (
    <div className={classes.right_block}>
      <BlockHeader chatBotNecessity={chatBotNecessity} progress={progress} />

      <RequiredData
        type="chooseOne"
        text={
          text
            ? text
            : `Nice!Select the way the ${currentGroupVariable.variableName} is stored in your dataset.`
        }
        currentGroupVariable={currentGroupVariable}
        onChoseOneBlockCliked={onChoseOneBlockCliked}
        chatBotStep={chatBotStep}
        chatBotNecessity={chatBotNecessity}
        onContinueButtonClick={onContinueButtonClick}
        groupVariables={groupVariables}
        necessityVariables={necessityVariables}
        currentStepProgress={currentStepProgress}
        stepCount={stepCount}
        error={error}
        onCheckBoxClick={onCheckBoxClick}
        buttonIsDisabled={buttonIsDisabled}
        isChatBotStepValid={isChatBotStepValid}
      />
      <Dots count={stepCount} currentNum={currentStepProgress} />
    </div>
  );
};

export const RightBlockRead = () => {
  return (
    <div className={classes.right_block}>
      <BlockHeader />
      <RequiredData
        type=""
        text={
          "You’re almost done completing the minimum required inputs, now choose where the “Province” column is:"
        }
      />
      <Dots count={10} currentNum={2} />
    </div>
  );
};

export const RightBlockReadError = () => {
  return (
    <div className={classes.right_block}>
      <BlockHeader />
      <RequiredData
        type=""
        error={
          "We can’t continue without this field. Check your dataset and upload it  again please."
        }
        text={
          "You’re almost done completing the minimum required inputs, now choose where the “Province” column is:"
        }
      />
      <Dots count={10} currentNum={2} />
    </div>
  );
};

const Error = ({ errorMsg }) => {
  return (
    <div className={classes.right_block_error}>
      <img src={errorImg} alt="" />
      <span>{errorMsg}</span>
    </div>
  );
};

const BlockHeader = ({ chatBotNecessity, progress }) => {
  return (
    <div className={classes.advices_info}>
      <h2>Follow the steps for a correct column selection</h2>
      <div className={classes.inputs_progress}>
        <div className={classes.inputs_progress_text}>
          <span>Inputs progress</span>
          <span className={classes.inputs_progress_text_pers}>
            {chatBotNecessity || "MINIMUMS"} %
          </span>
        </div>
        <ProgressBar progress={progress} />
      </div>
    </div>
  );
};

const ProgressBar = ({ progress = 50 }) => {
  return (
    <div className={classes.progress_bar}>
      <div style={{ width: progress + "%" }}></div>
    </div>
  );
};

const RequiredData = ({
  type,
  text,
  error,
  necessityVariables,
  onChatBotButtonClick,
  currentGroupVariable,
  groupVariables,
  onChoseOneBlockCliked,
  chatBotStep,
  chatBotNecessity,
  onContinueButtonClick,
  currentStepProgress,
  stepCount,
  onCheckBoxClick,
  buttonIsDisabled,
  isChatBotStepValid,
}) => {
  return (
    <div className={classes.required_data}>
      <h3>Hi, Juan! 👋</h3>
      <span className={classes.required_data_additional_info}>{text}</span>
      {error && <Error errorMsg={error} />}
      {type === "requiredInfo" ? (
        <>
          <RequiredInfo requiredDataBlocks={necessityVariables} />
          <button
            onClick={() => {
              onChatBotButtonClick(
                "MINIMUM",
                0,
                groupVariables,
                necessityVariables
              );
              // onChatBotButtonClick("chooseOne", groupVariables[0], "empty");
            }}
          >
            ¿Empezamos?
          </button>
        </>
      ) : type === "chooseOne" ? (
        <>
          <ChooseOneBlock
            options={currentGroupVariable.variables}
            onChoseOneBlockCliked={onChoseOneBlockCliked}
            currentGroupVariable={currentGroupVariable}
          />
          <BackOrContinueButtons
            chatBotStep={chatBotStep}
            chatBotNecessity={chatBotNecessity}
            onContinueButtonClick={onContinueButtonClick}
            groupVariables={groupVariables}
            necessityVariables={necessityVariables}
            currentStepProgress={currentStepProgress}
            stepCount={stepCount}
            onCheckBoxClick={onCheckBoxClick}
            buttonIsDisabled={buttonIsDisabled}
            isValid={isChatBotStepValid}

          />
        </>
      ) : (
        <>
          <ReadBlock />
          <BackOrContinueButtons />
        </>
      )}
    </div>
  );
};

const RequiredInfo = ({ requiredDataBlocks }) => {
  return (
    <div className={classes.required_data_block_wrapper}>
      {requiredDataBlocks.map((block) => (
        <RequiredDataBlock block={block} />
      ))}
    </div>
  );
};

const ChooseOneBlock = ({
  options,
  onChoseOneBlockCliked,
  currentGroupVariable,
}) => {
  // const [selectedOption, setSelectedOption] = useState("");
  return (
    <div className={classes.chose_one_block}>
      <div className={classes.chose_one_block_options}>
        {options &&
          options.map((option) => {
            // const isOptionSelected = selectedOption === option.variableName.active;
            if (!option.isDisable) {
              return (
                <div
                  onClick={() => {
                    // setSelectedOption(option.variableName);
                    onChoseOneBlockCliked(option, currentGroupVariable);
                  }}
                  className={`${classes.chose_one_block_option} ${
                    option.isActive ? classes.chosed_option : ""
                  }`}
                >
                  <span>{option.variableName}</span>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

const BackOrContinueButtons = ({
  chatBotStep,
  chatBotNecessity,
  onContinueButtonClick,
  groupVariables,
  necessityVariables,
  currentStepProgress,
  stepCount,
  onCheckBoxClick,
  buttonIsDisabled,
  isValid,
}) => {
  return (
    <div className={classes.rightblock_buttons}>
      <div className={classes.rightblock_buttons_checkbox}>
        <label>
          <input
            type="checkbox"
            onClick={() => onCheckBoxClick(buttonIsDisabled)}
          />
          <span></span>I don’t have this field.
        </label>
      </div>
      <div className={classes.rightblock_buttons_action}>
        <button className={classes.rightblock_buttons_action_back}>Back</button>
        <button
          className={classes.rightblock_buttons_action_continue}
          // disabled={!isValid}
          onClick={() =>
            onContinueButtonClick(
              chatBotNecessity,
              chatBotStep + 1,
              groupVariables,
              necessityVariables,
              currentStepProgress,
              stepCount,
              isValid,
            )
          }
        >
          Continue
        </button>
      </div>
    </div>
  );
};

const ReadBlock = () => {
  return <div className={classes.read_block}></div>;
};

const RequiredDataBlock = ({ block }) => {
  return (
    <div className={classes.required_data_block}>
      <div className={classes.required_data_block_content}>
        <span>{block.title}</span>
        <ul className={classes.required_data_block_list}>
          {block.items.map((item) => (
            <li key={item.id}>{item.variableName}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Dots = ({ currentNum, count }) => {
  const [dots, setDots] = useState([]);
  useEffect(() => {
    const newArr = [];
    for (let i = 0; i < count; i++) {
      newArr.push(
        <div className={currentNum === i + 1 && classes.activeDot}></div>
      );
    }
    setDots(newArr);
  }, [count, currentNum]);

  return <div className={classes.dots}>{dots}</div>;
};
