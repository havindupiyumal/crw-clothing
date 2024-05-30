import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import logger from "redux-logger";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [logger];

const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer, {}, composedEnhancers);

export const persistor = persistStore(store);
