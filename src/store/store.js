


const FETCH_TOKEN  = "FETCH_TOKEN"
const FETCH_TOKEN_SUCCESS  = "FETCH_TOKEN_SUCCESS"
const FETCH_TOKEN_FAILED  = "FETCH_TOKEN_FAILED"

const FETCH_ROUTE  = "FETCH_ROUTE"
const FETCH_ROUTE_SUCCESS  = "FETCH_ROUTE_SUCCESS"
const FETCH_ROUTE_FAILED  = "FETCH_ROUTE_FAILED"


//actions
export const fetchToken = (data) => {
  return {
    types: [
      FETCH_TOKEN,
      FETCH_TOKEN_SUCCESS,
      FETCH_TOKEN_FAILED,
    ],
    payload: {
      request: {
        method: "POST",
        url: `/route`,
        data,
      },
    },
  };
};

export const fetchRoute = (token) => {
  return {
    types: [
      FETCH_ROUTE,
      FETCH_ROUTE_SUCCESS,
      FETCH_ROUTE_FAILED,
    ],
    payload: {
      request: {
        method: "GET",
        url: `/route/${token}`
      },
    },
  };
};


//reducer
const initialState = {
  isLoading: false,
  coordinates: {},
  errors: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOKEN:
      return {
        ...state,
        isLoading: true,
      };

    // case FETCH_TOKEN_SUCCESS:
    //   const { data } = action.payload
    //   console.log("path_coords", data)
    //   return {
    //     ...state,
    //     isLoading: false,
    //     coordinates: {},
    //   };
    default:
      return state;
  }
};

export default rootReducer;
