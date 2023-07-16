import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import {authReducer} from "../../src/features/login/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type AppRootStateType = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppRootStateType,
  unknown,
  Action<string>
>;
