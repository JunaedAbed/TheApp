import {createSlice} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit/query/react'; // Correct import
import {apiSlice} from './apiSlice';

export const fetchEmployees = createAsyncThunk('employees', async () => {
  const response = await apiSlice.endpoints.getEmployees.query();
  return response.data;
});

const employeeSlice = createSlice({
  name: 'employees',
  initialState: {data: [], status: 'idle', error: null},
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchEmployees.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default employeeSlice.reducer;
