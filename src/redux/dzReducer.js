import { GET_DROPZONES, RATE_DZ, CREATE_DZ, GET_RATINGS, CHECKBOX_FILTER, GET_HAS_RATED, GET_PHOTOS } from "./constraints";

const initialState = {
  dropzones: [],
  hasRated: [],
  photos: []
};

export default function dzReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_DROPZONES + '_PENDING':
      return state;
    case GET_DROPZONES + '_FULFILLED':
      return { ...state, dropzones: payload };
    case GET_DROPZONES + '_REJECTED':
      return state;
    case RATE_DZ + '_PENDING':
      return state;
    case RATE_DZ + '_FULFILLED':
      return { ...state, dropzones: payload };
    case RATE_DZ + '_REJECTED':
      return state;
    case CREATE_DZ + '_PENDING':
      return state;
    case CREATE_DZ + '_FULFILLED':
      // console.log(payload)
      return { ...state, dropzones: payload };
    case CREATE_DZ + '_REJECTED':
      return state;
    case GET_RATINGS + '_PENDING':
      return state;
    case GET_RATINGS + '_FULFILLED':
      return { ...state, hasRated: payload };
    case GET_RATINGS + '_REJECTED':
      return state;
    case CHECKBOX_FILTER + '_PENDING':
      return state;
    case CHECKBOX_FILTER + '_FULFILLED':
      return { ...state, dropzones: payload };
    case CHECKBOX_FILTER + '_REJECTED':
      return state;
    case GET_HAS_RATED + '_PENDING':
      return state;
    case GET_HAS_RATED + '_FULFILLED':
      return { ...state, hasRated: payload };
    case GET_HAS_RATED + '_REJECTED':
      return state;
    case GET_PHOTOS + '_PENDING':
      return state;
    case GET_PHOTOS + '_FULFILLED':
      return { ...state, photos: payload };
    case GET_PHOTOS + '_REJECTED':
      return state;
    default:
      return state;
  }
};