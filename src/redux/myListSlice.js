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
      return { ...state, list: [] };
    },
    [getMyListData.fulfilled]: (state, action) => {
      return { ...state, data: action.payload };
    },
  },
});

export default myListSlice.reducer;
