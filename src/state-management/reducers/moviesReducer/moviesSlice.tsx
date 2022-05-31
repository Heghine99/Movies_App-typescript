import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import API_URL from './../../../configs/configs';
export const getPosts = createAsyncThunk('posts/getPosts', async () => {
  const response = await fetch(API_URL.API_URL);
  const result = await response.json();
  return result;
});
import {InitialState} from './../../../types/items';
import {Post} from './../../../types/items';
const IiitialState: InitialState = {
  loading: false,
  posts: Posts,
};

const postSlice = createSlice({
  name: 'posts',
  initialState,

  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.loading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    },
    [getPosts.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;
