import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import authHeader from '../services/auth-header';

export const getListData = createAsyncThunk('listSlice/getListData', async (category) => {
  const response = await axios.get(`/list/${category}`, { headers: authHeader() });
  const data = await response.json();
  return data.value();
});

const initialState = {
  data: undefined,
  status: '',
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListData.pending, (state) => {
      // eslint-disable-next-line no-param-reassign
      state.status = 'loading';
    });
    // value 값을 오브젝트로 받을 수 있게 수정함
    builder.addCase(getListData.fulfilled, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.value = action.payload;
      // eslint-disable-next-line no-param-reassign
      state.status = 'Complete';
    });
    builder.addCase(getListData.rejected, (state) => {
      // eslint-disable-next-line no-param-reassign
      state.status = 'fail';
    });
  },
});
