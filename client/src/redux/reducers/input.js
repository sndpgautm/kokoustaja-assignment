import { GET_INPUTS, ADD_INPUT } from '../actions/types';

const initialState = {
  inputs: [],
};

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INPUTS:
      return {
        ...state,
        inputs: action.payload,
      };
    default:
      return state;
  }
};

export default inputReducer;
