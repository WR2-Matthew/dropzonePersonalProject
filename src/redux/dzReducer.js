import { GET_DROPZONES } from "./constraints";

const initialState = {
  dropzones: []
}

export default function dzReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_DROPZONES + '_PENDING':
      return state;
    case GET_DROPZONES + '_FULFILLED':
      return { ...state, dropzones: payload }
    case GET_DROPZONES + '_REJECTED':
      return state;
    default:
      return state;
  }
};