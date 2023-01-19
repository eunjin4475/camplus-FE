import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import authHeader from '../services/auth-header';

const initialState = {
  list: [],
};

export const getListData = createAsyncThunk('list/getListData', async (category) => {
  if (category === undefined) {
    const response = await axios.get('http://127.0.0.1:8000/posts/', { headers: authHeader() });
    return response.data;
  }
  const response = await axios.get(`http://127.0.0.1:8000/posts/?category=${category}`, {
    headers: authHeader(),
  });
  return response.data;
});

const listSlice = createSlice({
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

export default listSlice.reducer;
