import { Reducer } from "redux";

import { ActionType } from "./action-types";
import { IActions, IState } from "./interfaces";

const defaultState: IState = {
  isAuth: false,
  news: [],
  errorMessage: "",
};

export const reducer: Reducer<IState, IActions> = (
  state = defaultState,
  action
) => {
  switch (action.type) {
    case ActionType.AUTH: {
      return {
        ...state,
      };
    }
    case ActionType.AUTH_SUCCESS: {
      return {
        ...state,
        isAuth: true,
        errorMessage: "",
      };
    }
    case ActionType.AUTH_FAIL: {
      return {
        ...state,
        errorMessage: action.payload,
      };
    }
    case ActionType.GET_NEWS_SUCCESS: {
      return {
        ...state,
        news: action.payload,
      };
    }
    case ActionType.GET_NEWS: {
      return {
        ...state,
      };
    }
    case ActionType.GET_NEWS_FAIL:
    default: {
      return state;
    }
  }
};
