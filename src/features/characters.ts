import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CharactersState } from '../utils/types';
import {
  fetchCharacers as fetchCharacersHelper,
  fetchCharacersById as fetchCharacersByIdHelper,
} from '../utils/apiFunctions';

const initialState: CharactersState = {
  characters: [],
  charactersToRender: [],
  count: 0,
  loading: false,
  error: false,
  isSpecificCharacter: false,
};

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async (page: number, { rejectWithValue, dispatch }) => {
    try {
      dispatch(setLoading(true));

      const data = await fetchCharacersHelper(page);

      dispatch(setCharacters(data.results));

      dispatch(setCharactersToRender({
        data: data.results,
        page,
      }));

      dispatch(setCount(data.info.count));

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

export const fetchCharacersById = createAsyncThunk(
  'charactersById/fetchCharactersById',
  async (ids: number[], { rejectWithValue, dispatch }) => {
    try {
      dispatch(setLoading(true));

      const data = await fetchCharacersByIdHelper(ids);

      dispatch(setCharacters(data));
      dispatch(setCount(data.length));

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

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters: (state, action) => {
      state.characters = action.payload;
    },
    setCharactersToRender: (state, action) => {
      const { data, page } = action.payload;
    
      const startIndex = (page - 1) * 20;
      const endIndex = startIndex + 20;
    
      state.charactersToRender = data.slice(startIndex, endIndex);
    },
    setCount: (state, action) => {
      state.count = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setIsSpecificCharacter: (state, action) => {
      state.isSpecificCharacter = action.payload
    }
  },
});

export const {
  setCharacters,
  setCharactersToRender,
  setCount,
  setLoading,
  setError,
  setIsSpecificCharacter,
} = charactersSlice.actions;
export default charactersSlice.reducer;