import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducers from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "../apis/user";
import { rtkQueryErrorLogger } from "../middleware";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

let store = configureStore({
  reducer: {
    persistedReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      // .concat(rtkQueryErrorLogger),
});

let persistor = persistStore(store);
setupListeners(store.dispatch);

export { store, persistor };
