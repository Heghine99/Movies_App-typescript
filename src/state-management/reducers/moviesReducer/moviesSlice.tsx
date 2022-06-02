import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import API_URL from './../../../configs/configs';

type AsyncThunkAction = {
  pending: string;
  fulfilled: string;
  rejected: string;
};

export const getPosts = createAsyncThunk<AsyncThunkAction | void | {}>(
  'posts/getPosts',
  async () => {
    const response = await fetch(API_URL.API_URL);
    const result = await response.json();
    return result;
  },
);
import {InitialState} from './entities';
const initialState: InitialState = {
  loading: false,
  posts: [],
  likedList: [],
  status: 'idle',
};

const postSlice = createSlice({
  name: 'posts',
  initialState,

  reducers: {},
  extraReducers: {
    [getPosts.pending.toString()]: state => {
      state.loading = true;
    },
    [getPosts.fulfilled.toString()]: (state, action) => {
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
