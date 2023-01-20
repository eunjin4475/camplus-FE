import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllList, getCategoryList } from '../services/user.service';

const initialState = {
  list: [],
};

export const getListData = createAsyncThunk('list/getListData', async (category) => {
  if (category === undefined) {
    const response = await getAllList();
    return response.data;
  }
  const response = await getCategoryList(category);
  return response.data;
});

const listsSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {},
  extraReducers: {
    [getListData.pending]: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.list = [];
    },
    [getListData.fulfilled]: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      return { ...state, list: action.payload };
    },
  },
});

export default listsSlice.reducer;
