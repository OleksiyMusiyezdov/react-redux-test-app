import { ActionType } from "./action-types";

export interface INews {
  id: number;
  title: string;
  article: string;
}

export interface ICredentials {
  username: string;
  password: string;
}

export interface IState {
  isAuth: boolean;
  news: Array<INews>;
  errorMessage: string;
}

export interface IAuthAction {
  type: ActionType.AUTH;
  payload: ICredentials;
}

export interface IAuthSuccessAction {
  type: ActionType.AUTH_SUCCESS;
}

export interface IAuthFailAction {
  type: ActionType.AUTH_FAIL;
  payload: string;
}

export interface IGetNewsAction {
  type: ActionType.GET_NEWS;
}

export interface IGetNewsSuccessAction {
  type: ActionType.GET_NEWS_SUCCESS;
  payload: Array<INews>;
}

export interface IGetNewsFailAction {
  type: ActionType.GET_NEWS_FAIL;
}

export type IActions =
  | IAuthAction
  | IAuthSuccessAction
  | IAuthFailAction
  | IGetNewsAction
  | IGetNewsSuccessAction
  | IGetNewsFailAction;
