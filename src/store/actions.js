


export const FETCH_TOKEN  = "FETCH_TOKEN"
export const FETCH_TOKEN_SUCCESS  = "FETCH_TOKEN_SUCCESS"
export const FETCH_TOKEN_FAILED  = "FETCH_TOKEN_FAILED"

export const FETCH_ROUTE  = "FETCH_ROUTE"
export const FETCH_ROUTE_SUCCESS  = "FETCH_ROUTE_SUCCESS"
export const FETCH_ROUTE_FAILED  = "FETCH_ROUTE_FAILED"

export const SET_LOADING = "SET_LOADING"
export const SET_COORDINATES = "SET_COORDINATES"
export const SET_RESPONSE_MESSAGE = "SET_RESPONSE_MESSAGE"

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

export const toggleLoading = (payload) => {
  return {
    type: SET_LOADING,
    payload
  };
};

export const setCoordinatesDetails = (payload) => {
  return {
    type: SET_COORDINATES,
    payload
  };
};


export const setResponseMessage = (payload) => {
  return {
    type: SET_RESPONSE_MESSAGE,
    payload
  };
};

