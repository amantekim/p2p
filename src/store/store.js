
import {
  FETCH_TOKEN,
  SET_LOADING,
  SET_RESPONSE_MESSAGE,
  SET_COORDINATES,
  SET_TOKEN,
  RESET_FORM
} from "./actions";

const initialState = {
  isLoading: false,
  data: {
    total_distance: "",
    total_time: "",
    paths: []
  },
  responseMessage: "",
  token: ""
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOKEN:
      return {
        ...state,
        isLoading: true,
        data: {
          total_distance: "",
          total_time: "",
          paths: []
        },
        responseMessage: ""
      };
    
    case SET_LOADING:
      return {
        ...state,
        isLoading: action?.payload,
      };
    
    case SET_COORDINATES:
      return {
        ...state,
        data: {
          ...action.payload,
        }
      };
    case SET_RESPONSE_MESSAGE:
      return {
        ...state,
        responseMessage: action.payload
      };

    case SET_TOKEN:
      return {
        ...state,
        token: action.payload
      };
    case RESET_FORM:
      return {
        ...state,
        data: {
          total_distance: "",
          total_time: "",
          paths: []
        },
        responseMessage: ""
      };

    default:
      return state;
  }
};

export default rootReducer;
