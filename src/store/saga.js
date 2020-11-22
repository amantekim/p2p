import { all, put, select } from "redux-saga/effects";
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
  setToken,
} from "./actions";

function* watchFetchTokenSuccess() {
  yield takeLatest(
    FETCH_TOKEN_SUCCESS,
    function* handleFetchToken({ payload }) {
      const { data } = payload;
      yield put(setToken(data.token))
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
      let token = yield select((state) => state.token);

      if (status === "success") {
        let coordinates = path.map((loc) => {
          return { lat: parseFloat(loc[0]), lng: parseFloat(loc[1]) };
        });

        const data = {
          paths: coordinates,
          total_distance: total_distance,
          total_time: total_time,
        };
        yield put(toggleLoading(false));
        yield put(setCoordinatesDetails(data));
      } else if (status === "failure") {
        yield put(toggleLoading(false));
        yield put(setResponseMessage(error));
      } else {
        yield put(fetchRoute(token))
      }
    }
  );
}

function* watchFetchRouteFailed() {
  yield takeLatest(
    FETCH_ROUTE_FAILED,
    function* handleFetchRouteFailed() {
      let token = yield select((state) => state.token);
      yield put(fetchRoute(token));
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
