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
  isFormVisible: false,
  isOptionVisible: false,
  currentOptionsSelected: [],
  characters: { name: '', status: '', species: '', type: '', gender: '' },
  locations: { name: '', type: '', dimension: '' },
  episodes: { name: '', episodes: '' },
  words: { query: '' },
  charactersIds: {
    character: [],
    location: [],
    episode: [],
  },
  normalizedCharactersIds: [],
  loading: false,
  error: false,
};

export const fetchCharactersIds = createAsyncThunk(
  'charactersIds/fetchCharactersIds',
  async (variables: FilterVariables, { rejectWithValue, dispatch }) => {
    try {
      dispatch(setLoading(true));

      const data = await fetchCharacersIdsHelper(variables);

      dispatch(setCharactersIds(data));

      return data;
    } catch (error) {
      dispatch(setLoading(false));
      dispatch(setError(true));

      return rejectWithValue(error);
    } finally {
      dispatch(setLoading(false))
    }
  }
);

const formFilterSlice = createSlice({
  name: 'formFilter',
  initialState,
  reducers: {
    setIsFormVisible: (state, action) => {
      state.isFormVisible = action.payload;
    },
    setOptionVisibility(state, action: PayloadAction<boolean>) {
      state.isOptionVisible = action.payload;
    },
    updateOptionsSelected(state, action: PayloadAction<string[]>) {
      state.currentOptionsSelected = action.payload;

      const shouldResetCharacters = !action.payload.includes('character');
      const shouldResetLocation = !action.payload.includes('location');
      const shouldResetEpisodes = !action.payload.includes('episode');

      if (shouldResetCharacters) {
        state.characters = initialState.characters;
      }

      if (shouldResetLocation) {
        state.locations = initialState.locations;
      }

      if (shouldResetEpisodes) {
        state.episodes = initialState.episodes;
      }
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
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setNormalizedCharactersIds: (state, action) => {
      state.normalizedCharactersIds = action.payload;
    }
  },
});

export const {
  setIsFormVisible,
  setOptionVisibility,
  updateOptionsSelected,
  updateCharacters,
  updateLocations,
  updateEpisodes,
  updateWords,
  resetFilters,
  setCharactersIds,
  setLoading,
  setError,
  setNormalizedCharactersIds
} = formFilterSlice.actions;
export default formFilterSlice.reducer;
