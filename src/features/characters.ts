import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CharacterState } from '../utils/types';
import {
  fetchCharacers as fetchCharacersHelper,
  fetchCharacersById as fetchCharacersByIdHelper,
} from '../utils/apiFunctions';

const initialState: CharacterState = {
  characters: [],
  count: 0,
  loading: false,
  error: false,
};

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async (page: number, { rejectWithValue, dispatch }) => {
    try {
      dispatch(setLoading(true));

      const data = await fetchCharacersHelper(page);

      dispatch(setCharacters(data.results));
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
  'characters/fetchCharacters',
  async (ids: number[], { rejectWithValue, dispatch }) => {
    try {
      dispatch(setLoading(true));

      const data = await fetchCharacersByIdHelper(ids);

      dispatch(setCharacters(data));
      dispatch(setCount(data.lenght));

      return data;
    } catch (error) {
      dispatch(setLoading(false));
      dispatch(setError(true));

      return rejectWithValue(error);
    } finally {
      dispatch(setLoading(false))
    }
  }
)

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters: (state, action) => {
      state.characters = action.payload;
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
  },
});

export const { setCharacters, setCount, setLoading, setError } = charactersSlice.actions;
export default charactersSlice.reducer;