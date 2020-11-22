
import {
  FETCH_TOKEN,
  SET_LOADING,
  SET_RESPONSE_MESSAGE,
  SET_COORDINATES,
} from "./actions";

const initialState = {
  isLoading: false,
  data: {
    total_distance: "",
    total_time: "",
    paths: []
  },
  responseMessage: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOKEN:
      return {
        ...state,
        isLoading: true,
        data: {},
        responseMessage: {}
      };
    
    case SET_LOADING:
      return {
        ...state,
        isLoading: action?.payload,
      };
    
    case SET_COORDINATES:
      console.log("actionpayload------ coor", action.payload)
      return {
        ...state,
        data: {
          ...action.payload,
        }
      };
    case SET_RESPONSE_MESSAGE:
      console.log("actionpayload------ message", action.payload)
      return {
        ...state,
        responseMessage: ""
      };

    default:
      return state;
  }
};

export default rootReducer;
