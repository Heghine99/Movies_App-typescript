import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import API_URL from './../../../configs/configs';
export const getPosts = createAsyncThunk('posts/getPosts', async () => {
  const response = await fetch(API_URL.API_URL);
  const result = await response.json();
  return result;
});
import {InitialState} from './entities';
const initialState: InitialState = {
  loading: false,
  posts: [],
  likedList: [],
};

const postSlice = createSlice({
  name: 'posts',
  initialState,

  reducers: {},
  extraReducers: {
    [getPosts.pending.toString()]: state => {
      state.loading = true;
    },
    [getPosts.fulfilled.toString()]: (state, action: PayloadAction<any>) => {
      state.posts = action.payload;
      state.loading = false;
    },
    [getPosts.rejected.toString()]: state => {
      state.loading = false;
    },
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;
