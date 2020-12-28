import { isValidElement } from "react";
import { getAndSetCandidateColumns } from "./fileColumnsReducer";
const SET_STEP = "SET_STEP";
const SET_CURRENT_GROUP_VARIABLE = "SET_CURRENT_GROUP_VARIABLE";
const SET_CURRENT_VARIABLE = "SET_CURRENT_VARIABLE";
const SET_TEXT = "SET_TEXT";
const SET_NECESSITY = "SET_NECESSITY";
const SET_IS_GROUP = "SET_IS_GROUP";
const SET_STEP_COUNT = "SET_STEP_COUNT";
const SET_CURRENT_STEP_PROGRESS = "SET_CURRENT_STEP_PROGRESS";
const SET_PROGRESS = "SET_PROGRESS";
const TOGGLE_ERROR = "TOGGLE_ERROR";
const TOGGLE_CURRENT_VARIABLE_IS_ACTIVE = "TOGGLE_CURRENT_VARIABLE_IS_ACTIVE";
const VALIDATE_CHATBOT = "VALIDATE_CHATBOT";
const SET_IS_VALID = "SET_IS_VALID";

const textList = {
  GROUP: [
    "Select the way the NAME is stored in your dataset",
    "Select how the NAME is stored in your dataset from thefollowing options",
  ],
  VARIABLE: [
    "Select the NAME column now",
    "Where is the NAME column?",
    "Tell us where the NAME is please",
    "Now tell us where the NAME is",
    "We would also need to know where the NAME column is please",
    "Where is the NAME column located?",
  ],
  GROUP_VARIABLE: [
    "Please tell us where the following column is:",
    "Please select where the columns are:",
  ],
};

let initialState = {
  necessity: "MINIMUMS",
  isGroup: false,
  step: "requiredInfo",
  currentGroupVariable: [],
  currentVariables: [],
  progress: 0,
  stepCount: 0,
  currentStepProgress: 0,
  disable: false,
  text:
    "We need you to tell us in which columns you have the following inputs so that the data quality is as excellent as possible:",
  error: false,
  isValid: false,
};

const createText = (name, type) => {
  let length = textList[type].length;
  let key = Math.floor(Math.random() * length);
  let text = textList[type][key];
  text = text.replace("NAME", name);
  return text;
};

const chatBotReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STEP:
      return {
        ...state,
        step: action.step,
      };
    case SET_CURRENT_GROUP_VARIABLE:
      return {
        ...state,
        currentGroupVariable: action.currentGroupVariable,
      };
    case SET_CURRENT_VARIABLE:
      return {
        ...state,
        currentVariables: [...state.currentVariables, action.currentVariable],
      };
    case SET_TEXT:
      const text = action.text;
      return {
        ...state,
        text: text,
      };
    case SET_NECESSITY:
      return {
        ...state,
        necessity: action.necessity,
      };
    case SET_IS_GROUP:
      return {
        ...state,
        isGroup: action.isGroup,
      };
    case SET_STEP_COUNT:
      return {
        ...state,
        stepCount: action.stepCount,
      };
    case SET_CURRENT_STEP_PROGRESS:
      return {
        ...state,
        currentStepProgress: action.currentStepProgress,
      };
    case SET_PROGRESS:
      return {
        ...state,
        progress: action.progress,
      };
    case TOGGLE_ERROR:
      let error, disable;
      if (state.necessity === "MINIMUM" && !action.buttonIsDisabled) {
        error =
          "We can’t continue without this field. Check your dataset and upload it again please.";
        disable = true;
      } else {
        error = false;
        disable = false;
      }
      return {
        ...state,
        error: error,
        disable: disable,
      };
    case VALIDATE_CHATBOT: {
      let isValid = false;
      let currentGroupVariable = state.currentGroupVariable;
      let isExist = false;
      if (currentGroupVariable) {
        currentGroupVariable.variables.map((variable) => {
          if (variable.variableName === action.variable.variableName) {
            variable.isValid = action.isChecked;
          }
          return variable;
        });

        currentGroupVariable.variables.map((variable) => {
          if (variable.isValid === variable.isActive) {
            isValid = false;
          }
          return variable;
        });

        let canBeValid = false;
        currentGroupVariable.minimumVariables.map((list) => {
          list.map((item) => {
            isExist = false;
            currentGroupVariable.variables.map((variable) => {
              if (
                variable.isValid &&
                variable.isActive &&
                variable.isValid === variable.isActive
              ) {
                if (
                  item.toLowerCase() === variable.variableName.toLowerCase()
                ) {
                  isExist = true;
                }
              }
            });
            if (isExist) {
              canBeValid = true;
            } else {
              canBeValid = false;
            }
          });
          if (canBeValid) {
            isValid = true;
          }
        });
      } else {
        isValid = true
      }

      // currentGroupVariable.variables.map((variable) => {
      //   if (variable.isValid === variable.isActive) {
      //     currentGroupVariable.minimumVariables.map((list) => {
      //       list.map((item) => {
      //         if (item.toLowerCase() === variable.variableName.toLowerCase()) {
      //           isExist = true;
      //         }
      //       });
      //     });
      //   }
      // });

      return {
        ...state,
        currentGroupVariable: currentGroupVariable,
        isValid: isValid,
      };
    }
    case TOGGLE_CURRENT_VARIABLE_IS_ACTIVE:
      let isExist = false;
      let items = [];

      let currentGroupVariable = state.currentGroupVariable;

      currentGroupVariable.validCombinations.map((conmbinations) => {
        if (!action.currentVariable.isActive) {
          conmbinations.map((option) => {
            if (option === action.currentVariable.variableName) {
              isExist = true;
            }
          });
        } else {
          isExist = true;
        }
        let safeCombinations = false;
        if (isExist) {
          if (
            conmbinations.length > 1 &&
            action.currentVariable.isActive === true
          ) {
            let canBeInItems = false;
            currentGroupVariable.variables.map((variable) => {
              if (
                variable.isActive === true &&
                action.currentVariable.variableName !== variable.variableName
              ) {
                conmbinations.map((option) => {
                  if (option === variable.variableName) {
                    safeCombinations = true;
                  }
                });
                if (safeCombinations) {
                  canBeInItems = true;
                } else {
                  canBeInItems = false;
                }
                safeCombinations = false;
              }
            });
            if (canBeInItems) {
              items = items.concat(conmbinations);
            }
          } else if (
            conmbinations.length === 1 &&
            action.currentVariable.isActive === true
          ) {
          } else if (
            conmbinations.length > 1 &&
            !action.currentVariable.isActive
          ) {
            let canBeInItems = false;
            currentGroupVariable.variables.map((variable) => {
              safeCombinations = false;
              if (
                (variable.isActive &&
                  action.currentVariable.variableName !==
                    variable.variableNam) ||
                (!variable.isActive &&
                  action.currentVariable.variableName === variable.variableName)
              ) {
                conmbinations.map((option) => {
                  if (option === variable.variableName) {
                    safeCombinations = true;
                  }
                });
                if (safeCombinations) {
                  canBeInItems = true;
                } else {
                  canBeInItems = false;
                }
                safeCombinations = false;
              }
            });
            if (canBeInItems) {
              items = items.concat(conmbinations);
            }
          } else {
            items = items.concat(conmbinations);
            isExist = false;
          }
        }
      });

      let variables = state.currentGroupVariable.variables.map((variable) => {
        if (variable.variableName === action.currentVariable.variableName) {
          if (variable.isActive) {
            variable.isActive = false;
          } else {
            variable.isActive = true;
          }
        } else {
          isExist = false;
          if (items.length !== 0) {
            items.map((item) => {
              if (item === variable.variableName) {
                // variable.isDisable = false;
                isExist = true;
              } else {
              }
            });
            if (isExist) {
              variable.isDisable = false;
            } else {
              variable.isDisable = true;
            }
          } else {
            variable.isDisable = false;
          }
        }

        return variable;
      });
      currentGroupVariable.variables = variables;
      return {
        ...state,
        currentGroupVariable: currentGroupVariable,
      };
    case SET_IS_VALID:
      return {
        ...state,
        isValid: action.isValid,
      };
    default:
      return state;
  }
};

export const setStep = (step) => ({
  type: SET_STEP,
  step,
});

export const setCurrentGroupVariable = (currentGroupVariable) => ({
  type: SET_CURRENT_GROUP_VARIABLE,
  currentGroupVariable,
});

export const setCurrentVariable = (currentVariable) => ({
  type: SET_CURRENT_VARIABLE,
  currentVariable,
});

export const setText = (text) => ({
  type: SET_TEXT,
  text,
});

export const setNecessity = (necessity) => ({
  type: SET_NECESSITY,
  necessity,
});

export const setIsGroup = (isGroup) => ({
  type: SET_IS_GROUP,
  isGroup,
});

export const setStepCount = (stepCount) => ({
  type: SET_STEP_COUNT,
  stepCount,
});

export const setCurrentStepProgress = (currentStepProgress) => ({
  type: SET_CURRENT_STEP_PROGRESS,
  currentStepProgress,
});

export const setProgress = (progress) => ({
  type: SET_PROGRESS,
  progress,
});

export const toggleError = (buttonIsDisabled) => ({
  type: TOGGLE_ERROR,
  buttonIsDisabled,
});

export const toggleCurrentVariableIsActive = (currentVariable) => ({
  type: TOGGLE_CURRENT_VARIABLE_IS_ACTIVE,
  currentVariable,
});
export const validateChatbot = (variable, isChecked) => ({
  type: VALIDATE_CHATBOT,
  variable,
  isChecked,
});

export const setIsValid = (isValid) => ({
  type: SET_IS_VALID,
  isValid,
});

export const startChatBot = (
  necessity,
  step,
  groupVariables,
  necessityVariables
) => async (dispach) => {
  let isGroup = false;
  let index = 0;
  dispach(setNecessity(necessity));
  dispach(setStep(step));
  dispach(setStepCount(necessityVariables[0].stepCount));
  dispach(setCurrentStepProgress(1));

  groupVariables.map((group) => {
    if (group.necessity === necessity) {
      if (index === step) {
        let text = createText(group.variableName, "GROUP");
        dispach(setText(text));
        dispach(setCurrentGroupVariable(group));
        isGroup = true;
      }
      index++;
    }
  });
  dispach(setIsGroup(isGroup));
};

export const nextStep = (
  necessity,
  step,
  groupVariables,
  necessityVariables,
  currentStep,
  stepCount
) => async (dispach) => {
  let isGroup = false;
  let index = 0;
  let exist = false;
  let group = [];
  dispach(setIsValid(false));
  if (groupVariables) {
    groupVariables.map((group) => {
      if (group.necessity === necessity) {
        if (index === step) {
          let text = createText(group.variableName, "GROUP");
          dispach(setCurrentGroupVariable(group));
          dispach(setText(text));
          isGroup = true;
          exist = true;
        }
        index++;
      }
    });
  }
  if (!isGroup && currentStep !== stepCount) {
    const indexOfVariable = step - index;
    let i = 0;
    necessityVariables.map((group) => {
      if (group.necessity === necessity) {
        group.items.map((variable) => {
          if (indexOfVariable === i) {
            dispach(setCurrentVariable(variable));
            dispach(setCurrentGroupVariable(false));
            let text = createText(variable.variableName, "VARIABLE");
            dispach(setText(text));
            dispach(getAndSetCandidateColumns(variable, false, variable));
            dispach(validateChatbot(variable, true));
            exist = true;
          }
          i++;
        });
      }
    });
  }
  if (!exist && necessity === "MINIMUM") {
    dispach(setNecessity("STANDARD_MINIMUM"));
    let totalSpepCount;
    necessityVariables.map((item) => {
      if (item.necessity === "STANDARD_MINIMUM") {
        totalSpepCount = item.stepCount;
      }
    });
    dispach(setStepCount(totalSpepCount));
    dispach(
      nextStep(
        "STANDARD_MINIMUM",
        0,
        groupVariables,
        necessityVariables,
        0,
        totalSpepCount
      )
    );
  } else if (!exist && necessity === "STANDARD_MINIMUM") {
    dispach(setNecessity("PERFECT"));
    let totalSpepCount;
    necessityVariables.map((item) => {
      if (item.necessity === "PERFECT") {
        totalSpepCount = item.stepCount;
      }
    });
    dispach(setStepCount(totalSpepCount));
    dispach(
      nextStep(
        "PERFECT",
        0,
        groupVariables,
        necessityVariables,
        0,
        totalSpepCount
      )
    );
    // dispach(setCurrentStepProgress(1));
  } else if (!exist && necessity === "PERFECT") {
    alert("done");
    dispach(setIsGroup(isGroup));
    dispach(setStep(step));
  } else {
    dispach(setIsGroup(isGroup));
    dispach(setStep(step));
    let progress = (currentStep / stepCount) * 100;
    dispach(setProgress(progress));
    dispach(setCurrentStepProgress(currentStep + 1));
  }
};

export const updateCurrentVariable = (variable) => async (dispach) => {
  dispach(toggleCurrentVariableIsActive(variable));
  //dispach(setCurrentVariable(variable));
  let text = createText(variable.variableName, "GROUP_VARIABLE");
  dispach(setText(text));
};

export const checkRequire = (buttonIsDisabled) => async (dispach) => {
  dispach(toggleError(buttonIsDisabled));
};

export const setAndValidate = (variable, isChecked) => async (dispach) => {
  dispach(toggleError(isChecked));
  dispach(validateChatbot(variable, isChecked));
};

export default chatBotReducer;
