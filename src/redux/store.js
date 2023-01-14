import { configureStore } from '@reduxjs/toolkit';
import { listSlice } from './listSlice';

const store = configureStore(
  {
    reducer: {
      lists: listSlice.reducer,
    },
  },
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
