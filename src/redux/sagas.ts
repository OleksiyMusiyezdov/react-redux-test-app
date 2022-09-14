import { call, put, takeEvery } from "redux-saga/effects";
import { IApiResponse, IGetNewsResponse } from "../api/api.interface";
import { authApi, getNewsApi } from "../api/api";
import {
  authFailAction,
  authSuccessAction,
  getNewsFailAction,
  getNewsSuccessAction,
} from "./actions";
import { ActionType } from "./action-types";
import { IAuthAction, ICredentials } from "./interfaces";

function* fetchData() {
  try {
    const data: IGetNewsResponse = yield call(getNewsApi);
    yield put(getNewsSuccessAction(data));
  } catch (e) {
    yield put(getNewsFailAction());
  }
}

function* authorization({ payload }: IAuthAction) {
  try {
    const data: IApiResponse<ICredentials> = yield call(authApi, payload);
    if (data.success === false) {
      throw new Error();
    } else {
      yield put(authSuccessAction());
    }
  } catch (e) {
    yield put(authFailAction("Username or password is incorrect"));
  }
}

export function* mySaga() {
  yield takeEvery(ActionType.GET_NEWS, fetchData);
  yield takeEvery(ActionType.AUTH, authorization);
}
