import { configureStore } from '@reduxjs/toolkit';
import styleguildeReducer from './modules/styleguide';

export const store = configureStore({
  reducer: {
    styleguid: styleguildeReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
