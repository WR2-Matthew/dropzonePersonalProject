import { GET_JUMPS } from "./constraints";

const initialState = {
  jumps: []
};

export default function jumpReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_JUMPS + '_PENDING':
      return state;
    case GET_JUMPS + '_FULFILLED':
      return { ...state, jumps: payload };
    case GET_JUMPS + '_REJECTED':
      return state;
    default:
      return state;
  };
};