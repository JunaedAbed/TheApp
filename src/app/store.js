import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {apiSlice} from './apiSlice';
import employeeReducer from './employeeSlice';
import employeeSlice from './employeeSlice';

const rootReducer = combineReducers({
  employees: employeeSlice,
});

const store = configureStore({
  reducer: {
    // [api.reducerPath]: api.reducer,
    // employees: employeeReducer,
    reducer: rootReducer,
  },
});

export default store;
