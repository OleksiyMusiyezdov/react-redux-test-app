import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "../redux/reducer";
import { applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { mySaga } from "../redux/sagas";

const sagaMiddleware = createSagaMiddleware();
applyMiddleware(sagaMiddleware);

export const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(mySaga);
