import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "./root-reducer";
import { rootSaga } from "./root-saga";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cart"],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const isProduction = process.env.NODE_ENV === "production";

const middlewares = [!isProduction && logger].filter(Boolean);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    // adding the saga middleware here
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware, middlewares),
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
