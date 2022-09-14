import { ActionType } from "./action-types";
import { IActions, INews, ICredentials } from "./interfaces";

export const authAction = (credentials: ICredentials): IActions => ({
  type: ActionType.AUTH,
  payload: credentials,
});

export const authSuccessAction = (): IActions => ({
  type: ActionType.AUTH_SUCCESS,
});

export const authFailAction = (errorMessage: string): IActions => ({
  type: ActionType.AUTH_FAIL,
  payload: errorMessage,
});

export const getNewsAction = (): IActions => ({
  type: ActionType.GET_NEWS,
});

export const getNewsSuccessAction = (data: Array<INews>): IActions => ({
  type: ActionType.GET_NEWS_SUCCESS,
  payload: data,
});

export const getNewsFailAction = (): IActions => ({
  type: ActionType.GET_NEWS_FAIL,
});
