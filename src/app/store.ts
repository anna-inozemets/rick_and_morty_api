import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import formFilterReducer from '../features/formFilter';
import paginationReducer from '../features/pagination';
import charactersReducer from '../features/characters';

export const store = configureStore({
  reducer: {
    formFilter: formFilterReducer,
    pagination: paginationReducer,
    characters: charactersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
