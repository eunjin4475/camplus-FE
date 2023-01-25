import { configureStore } from '@reduxjs/toolkit';
import listReducer from './listSlice';
import listDataReducer from './listDataSlice';
import myListReducer from './myListSlice';

const store = configureStore(
  {
    reducer: {
      lists: listReducer,
      listData: listDataReducer,
      myList: myListReducer,
    },
  },
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
