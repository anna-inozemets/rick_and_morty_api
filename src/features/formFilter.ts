import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  FormState,
  CharacterQuery,
  LocationQuery,
  EpisodeQuery,
  WordsQuery
} from '../utils/types';

const initialState: FormState = {
  isOptionVisible: false,
  currentOptionsSelected: [],
  characters: { name: '', status: '', species: '', type: '', gender: '' },
  locations: { name: '', type: '', dimension: '' },
  episodes: { name: '', episodes: '' },
  words: { query: '' },
};

const formFilterSlice = createSlice({
  name: 'formFilter',
  initialState,
  reducers: {
    setOptionVisibility(state, action: PayloadAction<boolean>) {
      state.isOptionVisible = action.payload;
    },
    updateOptionsSelected(state, action: PayloadAction<string[]>) {
      state.currentOptionsSelected = action.payload;
    },
    updateCharacters: (state, action: PayloadAction<CharacterQuery>) => {
      state.characters = action.payload;
    },
    updateLocations: (state, action: PayloadAction<LocationQuery>) => {
      state.locations = action.payload;
    },
    updateEpisodes: (state, action: PayloadAction<EpisodeQuery>) => {
      state.episodes = action.payload;
    },
    updateWords: (state, action: PayloadAction<WordsQuery>) => {
      state.words = action.payload;
    },
    resetFilters() {
      return initialState;
    },
  },
});

export const {
  setOptionVisibility,
  updateOptionsSelected,
  updateCharacters,
  updateLocations,
  updateEpisodes,
  updateWords,
  resetFilters,
} = formFilterSlice.actions;
export default formFilterSlice.reducer;
