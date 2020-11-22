import { all, put } from "redux-saga/effects";
import { takeLatest } from "redux-saga/effects";

import {
  FETCH_TOKEN_SUCCESS,
  FETCH_TOKEN_FAILED,
  FETCH_ROUTE_SUCCESS,
  FETCH_ROUTE_FAILED,
  fetchToken,
  fetchRoute,
  toggleLoading,
  setCoordinatesDetails,
  setResponseMessage,
} from "./actions";

function* watchFetchTokenSuccess() {
  yield takeLatest(
    FETCH_TOKEN_SUCCESS,
    function* handleFetchToken({ payload }) {
      const { data } = payload;
      yield put(fetchRoute(data.token));
    }
  );
}

function* watchFetchTokenFailed() {
  yield takeLatest(
    FETCH_TOKEN_FAILED,
    function* handleFetchTokenFailed(response) {
      const {
        meta: {
          previousAction: {
            payload: {
              request: { data },
            },
          },
        },
      } = response;
      yield put(fetchToken(data));
    }
  );
}

function* watchFetchRouteSuccess() {
  yield takeLatest(
    FETCH_ROUTE_SUCCESS,
    function* handleFetchRouteSuccess({ payload }) {
      const {
        data: {
          status,
          path = [],
          total_distance = 0,
          total_time = 0,
          error = {},
        },
      } = payload || {};

      yield put(toggleLoading(false));
      if (status === "success") {
        let coordinates = path.map((loc) => {
          return { lat: parseFloat(loc[0]), lng: parseFloat(loc[1]) };
        });

        const data = {
          path: coordinates,
          total_distance: total_distance,
          total_time: total_time,
        };
        yield put(setCoordinatesDetails(data));
      } else if (status === "failure") {
        yield put(setResponseMessage(error));
      } else {

      }
    }
  );
}

function* watchFetchRouteFailed() {
  yield takeLatest(
    FETCH_ROUTE_FAILED,
    function* handleFetchRouteSuccess(response) {
      const {
        meta: {
          previousAction: {
            payload: {
              request: { data },
            },
          },
        },
      } = response;
      yield put(fetchRoute(data));
    }
  );
}

export default function* sagas() {
  yield all([
    watchFetchTokenSuccess(),
    watchFetchTokenFailed(),
    watchFetchRouteSuccess(),
    watchFetchRouteFailed(),
  ]);
}
