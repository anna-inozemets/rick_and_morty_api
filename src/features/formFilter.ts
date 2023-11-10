import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import {
  FormState,
  CharacterQuery,
  LocationQuery,
  EpisodeQuery,
  WordsQuery,
  FilterVariables
} from '../utils/types';
import { fetchCharacersIds as fetchCharacersIdsHelper } from '../utils/apiFunctions';

const initialState: FormState = {
  isOptionVisible: false,
  currentOptionsSelected: [],
  characters: { name: '', status: '', species: '', type: '', gender: '' },
  locations: { name: '', type: '', dimension: '' },
  episodes: { name: '', episodes: '' },
  words: { query: '' },
  charactersIds: [],
};

export const fetchCharactersIds = createAsyncThunk(
  'charactersIds/fetchCharactersIds',
  async (variables: FilterVariables, { rejectWithValue, dispatch }) => {
    try {
      // dispatch(setLoading(true));

      const data = await fetchCharacersIdsHelper(variables);

      dispatch(setCharactersIds(data));

      return data;
    } catch (error) {
      // dispatch(setLoading(false));
      // dispatch(setError(true));

      return rejectWithValue(error);
    } finally {
      // dispatch(setLoading(false))
    }
  }
);

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
    setCharactersIds: (state, action) => {
      state.charactersIds = action.payload;
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
  setCharactersIds
} = formFilterSlice.actions;
export default formFilterSlice.reducer;
