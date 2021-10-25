import axios from 'axios';

import { GET_INPUTS } from './types';

// Get Inputs from search field
export const getInputs = (text) => (dispatch) => {
  axios
    .get(`/api/v1/input?text=${text}`)
    .then((res) =>
      dispatch({
        type: GET_INPUTS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_INPUTS,
        payload: [],
      })
    );
};

// Save Input

export const addInput = (data) => (dispatch) => {
  axios.post('/api/v1/input', data);
};
