import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { myList } from '../services/user.service';

const initialState = {
  list: [],
};

export const getMyListData = createAsyncThunk('list/getMyListData', async () => {
  const response = await myList();
  return response.data;
});

const myListSlice = createSlice({
  name: 'myList',
  initialState,
  reducers: {},
  extraReducers: {
    [getMyListData.pending]: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.list = [];
    },
    [getMyListData.fulfilled]: (state, action) => {
      return { ...state, list: action.payload };
    },
  },
});

export default myListSlice.reducer;
