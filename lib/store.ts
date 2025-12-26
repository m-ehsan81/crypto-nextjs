import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "./features/crypto/crypto-api";

const rootReducer = combineReducers({
  [cryptoApi.reducerPath]: cryptoApi.reducer,
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(cryptoApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
