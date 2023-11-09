import { configureStore } from '@reduxjs/toolkit'
import formFilterReducer from '../features/formFilter';

export const store = configureStore({
  reducer: {
    formFilter: formFilterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
