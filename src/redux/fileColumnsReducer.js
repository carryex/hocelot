import { api } from "../api/api";

const SET_FILE_COLUMNS = "SET_FILE_COLUMNS";
const SET_VARIABLE_LIST = "SET_VARIABLE_LIST";
const SET_GROUP_VARIABLES = "SET_GROUP_VARIABLES";
const SET_NECESSITY_VARIABLES = "SET_NECESSITY_VARIABLES";
const SET_CANDIDATE_COLUMNS = "SET_CANDIDATE_COLUMNS";
const SET_SELECTED_OPTION = "SET_SELECTED_OPTION";
const SET_IS_CONFIRMED = "SET_IS_CONFIRMED";
const SET_COLUMN_DISABLE = "SET_COLUMN_DISABLE";

const progress = [
  {
    id: 1,
    title: "Minimums",
    necessity: "MINIMUM",
    items: [],
  },
  {
    id: 2,
    title: "Standard Minimums",
    necessity: "STANDARD_MINIMUM",
    items: [],
  },
  {
    id: 3,
    title: "Perfects",
    necessity: "PERFECT",
    items: [],
  },
];
let initialState = {
  fileColumns: [],
  variableList: [],
  groupVariables: [],
  necessityVariables: [],
  candidateColumns: false,
};

const getNecessityVariables = (variableList, groupVariables) => {
  const necessityVariables = progress;
  const newNecessityVariables = necessityVariables.map((necessityVariable) => {
    let newNecessityVariable = variableList.filter(
      (variable) => variable.necessity === necessityVariable.necessity
    );
    let newNecessityGroupVariable = groupVariables.filter(
      (group) => group.necessity === necessityVariable.necessity
    );
    let newItems = newNecessityVariable.concat(newNecessityGroupVariable);
    let item = {
      ...necessityVariable,
      items: newItems,
      stepCount: newItems.length,
    };
    return item;
  });
  return newNecessityVariables;
};
const fileColumnsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILE_COLUMNS:
      action.fileColumns.map((column) => {
        column.options = [];
        column.selectedOption = "";
        column.isConfirmed = false;
      });
      return {
        ...state,
        fileColumns: [...action.fileColumns],
      };
    case SET_VARIABLE_LIST:
      return {
        ...state,
        variableList: [...action.variableList],
      };
    case SET_GROUP_VARIABLES:
      return {
        ...state,
        groupVariables: [...action.groupVariables],
      };
    case SET_NECESSITY_VARIABLES:
      return {
        ...state,
        necessityVariables: action.necessityVariables,
      };
    case SET_CANDIDATE_COLUMNS:
      let options = [];
      let candidateColumns = [];
      if (action.variable) {
        state.fileColumns.map((column) => {
          column.possibleMappings.map((possibleMapping) => {
            if (
              possibleMapping.toLowerCase() ===
              action.variable.variableName.toLowerCase()
            ) {
              if (action.currentGroupVariable) {
                options = [...action.currentGroupVariable.variables];
              } else if (action.variable)
                if (action.variable) {
                  options = [action.variable];
                }
              let newColumn = column;
              newColumn.options = [...options];
              candidateColumns.push(newColumn);
            }
          });
        });
      }

      if (candidateColumns.length === 1) {
        const newOption = candidateColumns[0].options.filter(
          (option) => option.variableName === action.variable.variableName
        );
        candidateColumns[0].selectedOption = newOption[0];
        candidateColumns[0].isConfirmed = true;
      } else if (candidateColumns.length === 0) {
        candidateColumns = [...state.fileColumns];
        candidateColumns.map((column) => {
          if (action.currentGroupVariable) {
            column.options = [...action.currentGroupVariable.variables];
          } else if (action.variable) {
            column.options = [action.variable];
          } else {
            if (state.currentGroupVariable) {
              column.options = [...action.currentGroupVariable.variables];
            } else {
              column.options = action.currentVariablev;
            }
          }
        });
      }
      return {
        ...state,
        candidateColumns: [...candidateColumns],
      };
    case SET_IS_CONFIRMED: {
      let candidateColumns = [...state.candidateColumns].map((column) => {
        if (column.numberColumn === action.numberColumn) {
          column.isConfirmed = action.isConfirmed;
        }
        return column;
      });
      return {
        ...state,
        candidateColumns: [...candidateColumns],
      };
    }
    case SET_SELECTED_OPTION: {
      let candidateColumn = action.candidateColumn;
      let candidateColumns = [...state.candidateColumns];
      candidateColumns.map((column) => {
        if (column.numberColumn === candidateColumn.numberColumn) {
          column.selectedOption = action.newOption;
        }
      });
      return {
        ...state,
        candidateColumns: candidateColumns,
      };
    }
    case SET_COLUMN_DISABLE: {
      let candidateColumn = action.candidateColumn;
      let candidateColumns = [...state.candidateColumns];
      candidateColumns.map((column) => {
        if (column.numberColumn === candidateColumn.numberColumn) {
          column.isConfirmed = action.disable;
        }
      });
      return {
        ...state,
        candidateColumns: candidateColumns,
      };
    }
    default:
      return state;
  }
};

export const setFileColumns = (fileColumns) => ({
  type: SET_FILE_COLUMNS,
  fileColumns,
});

export const setVariableList = (variableList) => ({
  type: SET_VARIABLE_LIST,
  variableList,
});

export const setGroupVariables = (groupVariables) => ({
  type: SET_GROUP_VARIABLES,
  groupVariables,
});

export const setNecessityVariables = (necessityVariables) => ({
  type: SET_NECESSITY_VARIABLES,
  necessityVariables,
});

export const setCandidateColumns = (variable, currentGroupVariable) => ({
  type: SET_CANDIDATE_COLUMNS,
  variable,
  currentGroupVariable,
});

export const setSelectedOption = (newOption, candidateColumn) => ({
  type: SET_SELECTED_OPTION,
  newOption,
  candidateColumn,
});

export const setColumnDisable = (candidateColumn, disable) => ({
  type: SET_COLUMN_DISABLE,
  candidateColumn,
  disable,
});

export const setIsConfirmed = (numberColumn, isConfirmed) => ({
  type: SET_IS_CONFIRMED,
  numberColumn,
  isConfirmed,
});

export const getFileColumns = () => async (dispach) => {
  try {
    let response = await api.getFileColumns();
    if (response) {
      dispach(setFileColumns(response.fileColumns));
    }
  } catch (e) {
    console.log(e);
  }
};

export const updateSelectedOption = (newOption, candidateColumn) => async (
  dispach
) => {
  dispach(setSelectedOption(newOption, candidateColumn));
  dispach(setColumnDisable(candidateColumn, true));
};

export const getVariableAndGroupVariableList = () => async (dispach) => {
  try {
    let response = await api.getVariableAndGroupVariableList();
    if (response) {
      dispach(setVariableList(response.variables));
      dispach(setGroupVariables(response.groupVariables));
      let necessityVariables = getNecessityVariables(
        response.variables,
        response.groupVariables
      );
      dispach(setNecessityVariables(necessityVariables));
    }
  } catch (e) {
    console.log(e);
  }
};

export const postAndConfirm = (
  numberColumn,
  isConfirmed,
  originalColumnName,
  variableName,
  dataType
) => async (dispach) => {
  let projectId, clientId, datasetId;
  try {
    let response = await api.postProject(
      projectId,
      clientId,
      datasetId,
      originalColumnName,
      variableName,
      dataType,
      numberColumn
    );
    if (response.status === 200) {
      console.log("response.status === 200");
      dispach(setIsConfirmed(numberColumn, isConfirmed));
    }
  } catch (e) {
    console.log(e);
  }
};

export const getAndSetCandidateColumns = (
  variable,
  currentGroupVariable
) => async (dispach) => {
  dispach(setCandidateColumns(variable, currentGroupVariable));
};

export const seeAllColumns = (currentVariable, currentGroupVariable) => async (
  dispach
) => {
  dispach(setCandidateColumns(false, currentGroupVariable));
  console.log("see all columns");
};

// export const updateCandidateColumns = (
//   variable,
//   currentGroupVariable,
//   key
// ) => async (dispach) => {
//   dispach(setCurrentVariable(variable));
//   dispach(setText(key));
//   dispach(
//     getAndSetCandidateColumns(variable.variableName, currentGroupVariable)
//   );
// };

export default fileColumnsReducer;
