import { createSlice } from '@reduxjs/toolkit';
import { HistoryState } from '../utils/types';

const storedHistory = localStorage.getItem('history');
const parsedHistory = storedHistory ? JSON.parse(storedHistory) : [];

const initialState: HistoryState = {
  isHistoryVisible: false,
  history: Array.isArray(parsedHistory) ? parsedHistory : [],
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    setIsHistoryVisible: (state, action) => {
      state.isHistoryVisible = action.payload;
    },
    updateHistory: (state, action) => {
      state.history.push({
        keyWords: action.payload.keyWords,
        characters: action.payload.characters,
        location: action.payload.location,
        episode: action.payload.episode,
        name: action.payload.name,
      });

      localStorage.setItem('history', JSON.stringify(state.history));
    },
  },
});

export const { setIsHistoryVisible, updateHistory } = historySlice.actions;
export default historySlice.reducer;
