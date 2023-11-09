import { configureStore } from '@reduxjs/toolkit'
import formFilterReducer from '../features/formFilter';
import paginationReducer from '../features/pagination';

export const store = configureStore({
  reducer: {
    formFilter: formFilterReducer,
    pagination: paginationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
