import { BUY_BROWNIE } from "./brownieTypes";

const initialState = {
  numOfBrownies: 30,
};

const brownieReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_BROWNIE:
      return {
        ...state,
        numOfBrownies: state.numOfBrownies - 1,
      };
    default:
      return state;
  }
};

export default brownieReducer;
