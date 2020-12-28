import React, { useEffect } from "react";
import { connect } from "react-redux";
import Page9 from "./page9";
import {
  setNecessityVariables,
  getFileColumns,
  getVariableAndGroupVariableList,
  getAndSetCandidateColumns,
  setSelectedOption,
  setIsConfirmed,
  postAndConfirm,
  updateSelectedOption,
  seeAllColumns,
} from "../../redux/fileColumnsReducer";
import {
  setCurrentGroupVariable,
  setStep,
  setCurrentVariable,
  setText,
  startChatBot,
  nextStep,
  updateCurrentVariable,
  checkRequire,
  setAndValidate,
} from "../../redux/chatBotReducer";

const Page9Container = ({
  fileColumns,
  necessityVariables,
  chatBotStep,
  currentGroupVariable,
  groupVariables,
  getFileColumns,
  getVariableAndGroupVariableList,
  getAndSetCandidateColumns,
  candidateColumns,
  chatBotText,
  postAndConfirm,
  startChatBot,
  chatBotNecessity,
  nextStep,
  updateCurrentVariable,
  chatBotProgress,
  chatBotStepCount,
  chatBotCurrentStepProgress,
  chatBotError,
  checkRequire,
  buttonIsDisabled,
  updateSelectedOption,
  currentVariable,
  seeAllColumns,
  isChatBotStepValid,
  setAndValidate,
}) => {
  useEffect(() => {
    getFileColumns();
    getVariableAndGroupVariableList();
  }, []);

  const onChatBotButtonClick = (
    necessity,
    step,
    groupVariables,
    necessityVariables
  ) => {
    startChatBot(necessity, step, groupVariables, necessityVariables);
  };

  const onContinueButtonClick = (
    necessity,
    step,
    groupVariables,
    necessityVariables,
    currentStep,
    stepCount,
    isChatBotStepValid
  ) => {
    if (!isChatBotStepValid) {
      checkRequire(isChatBotStepValid);
    } else {
      nextStep(
        necessity,
        step,
        groupVariables,
        necessityVariables,
        currentStep,
        stepCount
      );
    }
  };

  const onChoseOneBlockCliked = (variable, currentGroupVariable) => {
    updateCurrentVariable(variable);
    getAndSetCandidateColumns(variable, currentGroupVariable);
  };

  const changeSelectedOption = (newOption, candidateColumns) => {
    updateSelectedOption(newOption, candidateColumns);
    setAndValidate(newOption,true);
  };

  const onButtonClick = (
    numberColumn,
    willConfermed,
    originalColumnName,
    variableName,
    dataType
  ) => {
    postAndConfirm(
      numberColumn,
      willConfermed,
      originalColumnName,
      variableName,
      dataType
    );
  };

  const onCheckBoxClick = (buttonIsDisabled) => {
    checkRequire(buttonIsDisabled);
  };

  const onEyeClick = (currentVariable, currentGroupVariable) => {
    seeAllColumns(currentVariable, currentGroupVariable);
  };

  return (
    <Page9
      fileColumns={fileColumns}
      necessityVariables={necessityVariables}
      onChatBotButtonClick={onChatBotButtonClick}
      chatBotStep={chatBotStep}
      currentGroupVariable={currentGroupVariable}
      groupVariables={groupVariables}
      onChoseOneBlockCliked={onChoseOneBlockCliked}
      candidateColumns={candidateColumns}
      changeSelectedOption={changeSelectedOption}
      chatBotText={chatBotText}
      onButtonClick={onButtonClick}
      chatBotNecessity={chatBotNecessity}
      onContinueButtonClick={onContinueButtonClick}
      progress={chatBotProgress}
      chatBotStepCount={chatBotStepCount}
      chatBotCurrentStepProgress={chatBotCurrentStepProgress}
      chatBotError={chatBotError}
      onCheckBoxClick={onCheckBoxClick}
      buttonIsDisabled={buttonIsDisabled}
      onEyeClick={onEyeClick}
      currentVariable={currentVariable}
      isChatBotStepValid={isChatBotStepValid}
    />
  );
};

let mapStateToProps = (state) => {
  return {
    fileColumns: state.fileColumns.fileColumns,
    necessityVariables: state.fileColumns.necessityVariables,
    groupVariables: state.fileColumns.groupVariables,
    chatBotStep: state.chatBot.step,
    currentGroupVariable: state.chatBot.currentGroupVariable,
    candidateColumns: state.fileColumns.candidateColumns,
    chatBotText: state.chatBot.text,
    chatBotProgress: state.chatBot.progress,
    chatBotStepCount: state.chatBot.stepCount,
    chatBotCurrentStepProgress: state.chatBot.currentStepProgress,
    chatBotNecessity: state.chatBot.necessity,
    chatBotError: state.chatBot.error,
    buttonIsDisabled: state.chatBot.disable,
    currentVariable: state.chatBot.currentVariable,
    isChatBotStepValid: state.chatBot.isValid,
  };
};
export default connect(mapStateToProps, {
  setNecessityVariables,
  setStep,
  setCurrentGroupVariable,
  setCurrentVariable,
  getFileColumns,
  getVariableAndGroupVariableList,
  getAndSetCandidateColumns,
  setSelectedOption,
  setText,
  setIsConfirmed,
  postAndConfirm,
  startChatBot,
  nextStep,
  updateCurrentVariable,
  checkRequire,
  updateSelectedOption,
  seeAllColumns,
  setAndValidate,
})(Page9Container);
