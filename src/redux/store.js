import { configureStore } from '@reduxjs/toolkit';
import listReducer from './listSlice';
import listDataReducer from './listDataSlice';

const store = configureStore(
  {
    reducer: {
      lists: listReducer,
      listData: listDataReducer,
    },
  },
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
