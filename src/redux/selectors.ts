import { INews, IState } from "./interfaces";

export const isAuthSelector = (state: IState): boolean => state.isAuth;

export const newsSelector = (state: IState): Array<INews> => state.news;

export const errorSelector = (state: IState): string => state.errorMessage;
