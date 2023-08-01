import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "../features/settings/settingsSlice";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const storage = createWebStorage("local");
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, settingsReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
