import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {InitialState} from './entities';
const initialState: InitialState = {
  loading: false,
  error: false,
  searchResult: [],
};

export const getSearchResult = createAsyncThunk(
  'search/getSearchResult',
  async search => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?&api_key=7ecd0b11bc4cd387a22b43cb37086584&query=${search}`,
    );
    const searchResults = await response.json();
    return searchResults;
  },
);

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  //comment
  extraReducers: {
    [getSearchResult.pending.toString()]: state => {
      state.error = false;
      state.loading = true;
    },
    [getSearchResult.fulfilled.toString()]: (state, action) => {
      state.error = false;
      state.searchResult = action.payload;
      state.loading = false;
    },
    [getSearchResult.rejected.toString()]: state => {
      state.error = true;
      state.loading = false;
    },
  },
});

export default searchSlice.reducer;
