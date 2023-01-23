import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getList } from '../services/user.service';

const initialState = {
  data: [],
};

export const getData = createAsyncThunk('list/getData', async (id) => {
  const response = await getList(id);
  return response.data;
});

const listDataSlice = createSlice({
  name: 'listData',
  initialState,
  reducers: {},
  extraReducers: {
    [getData.pending]: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.data = [];
    },
    [getData.fulfilled]: (state, action) => {
      return { ...state, data: action.payload };
    },
  },
});

export default listDataSlice.reducer;
