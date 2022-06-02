import {configureStore, combineReducers} from '@reduxjs/toolkit';
import moviesSlice from './reducers/moviesReducer/moviesSlice';
import searchSlice from './reducers/searchReducer/searchSlice';
const RootReducer = combineReducers({
  moviesSlice,
  searchSlice,
});

const createDebugger = require('redux-flipper').default;

const configureCustomStore = () => {
  const store = configureStore({
    reducer: RootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(createDebugger()),
  });
  return {store};
};

export const {store} = configureCustomStore();
