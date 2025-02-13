import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./slices/loginSlice";

export const store = configureStore({
  reducer: {
    // Add reducers here
    login: LoginReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
