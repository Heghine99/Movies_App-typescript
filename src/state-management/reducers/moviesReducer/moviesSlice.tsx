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
  disliked: [],
  SaveList: [],
  ratings: [],
  ratingCount: [],
  status: 'idle',
};

const postSlice = createSlice({
  name: 'posts',
  initialState,

  reducers: {
    addAndRemoveLikedListMovies: (state, action) => {
      const findIndexInLikeds = state.likedList.findIndex(
        item => item === action.payload.id,
      );
      const findIndexInDislikes = state.disliked?.includes(action.payload.id);

      if (findIndexInLikeds !== -1) {
        state.likedList.splice(findIndexInLikeds, 1);
        return state;
      } else {
        state.likedList = [...state.likedList, action.payload.id];
        if (findIndexInDislikes) {
          const y = state.disliked.filter(item => item !== action.payload.id);
          state.disliked = y;
        }
        return state;
      }
    },
    dislikeListMovies: (state, action) => {
      const findIndexInLikeds = state.disliked.findIndex(
        item => item === action.payload.id,
      );
      const findIndexlikes = state.likedList?.includes(action.payload.id);

      if (findIndexInLikeds !== -1) {
        state.disliked.splice(findIndexInLikeds, 1);
        return state;
      } else {
        state.disliked = [...state.disliked, action.payload.id];
        if (findIndexlikes) {
          const x = state.likedList.filter(item => item !== action.payload.id);
          state.likedList = x;
        }
        return state;
      }
    },
    addSaveList: (state, action) => {
      const findIndexInwantToWatchList = state.SaveList.findIndex(
        item => item === action.payload.id,
      );
      if (findIndexInwantToWatchList !== -1) {
        state.SaveList.splice(findIndexInwantToWatchList, 1);
        return state;
      } else {
        state.SaveList = [...state.SaveList, action.payload.id];
        return state;
      }
    },
    addRatingList: (state, action) => {
      const findIndexInwantToWatchList = state.ratings.findIndex(
        item => item === action.payload.id,
      );
      if (findIndexInwantToWatchList !== -1) {
        state.ratings.splice(findIndexInwantToWatchList, 1);
        return state;
      } else {
        state.ratings = [...state.ratings, action.payload.id];
        return state;
      }
    },
    ratingCount: (state, action) => {
      const findIndexRatingCount = state.ratingCount.findIndex(
        item => item.id === action.payload.id,
      );
      if (findIndexRatingCount !== -1) {
        state.ratingCount[findIndexRatingCount].count = action.payload.count;
        return state;
      } else {
        state.ratingCount = [...state.ratingCount, action.payload];
        return state;
      }
    },
  },
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

export const {
  addAndRemoveLikedListMovies,
  dislikeListMovies,
  addSaveList,
  addRatingList,
  ratingCount,
} = postSlice.actions;
export default postSlice.reducer;
