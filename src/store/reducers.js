import { ACTIONS } from "./actions";

const initialState = {
  firstValue: "",
  secondValue: "",
  result: "",
  operation: "",
  errors: {}
};

export const calculatorReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTIONS.CHANGE_FIRST_VALUE:
      return { ...state, firstValue: action.data };
    case ACTIONS.CHANGE_SECOND_VALUE:
      return { ...state, secondValue: action.data };
    case ACTIONS.CHANGE_OPERATION:
      return { ...state, operation: action.data };
    case ACTIONS.FETCH:
      return { ...state, result: action.data, errors: {} };
    case ACTIONS.ERROR_DATA:
      return { ...state, errors: action.data };
    default:
      return state;
  }
};
