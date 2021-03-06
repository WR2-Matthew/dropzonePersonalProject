import { GET_JUMPS, ADD_JUMP, DELETE_JUMP, EDIT_JUMP } from "./constraints";

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
    case ADD_JUMP + '_PENDING':
      return state;
    case ADD_JUMP + '_FULFILLED':
      console.log(payload)
      return { ...state, jumps: payload };
    case ADD_JUMP + '_REJECTED':
      return state;
    case DELETE_JUMP + '_PENDING':
      return state;
    case DELETE_JUMP + '_FULFILLED':
      return { ...state, jumps: payload };
    case DELETE_JUMP + '_REJECTED':
      return state;
    case EDIT_JUMP + '_PENDING':
      return state;
    case EDIT_JUMP + '_FULFILLED':
      return { ...state, jumps: payload };
    case EDIT_JUMP + '_REJECTED':
      return state;
    default:
      return state;
  };
};