import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const API_ENDPOINT = 'https://dummy.restapiexample.com/api/v1/';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: API_ENDPOINT}),
  onQueryStarted: ({queryKey}) => {
    console.log('Starting request:', queryKey);
  },
  tagTypes: ['Employees'],
  endpoints: builder => ({
    getEmployees: builder.query({
      query: () => 'employees',
      providesTags: ['Employees'],
    }),
    editEmployee: builder.mutation({
      query: employeeData => ({
        url: `update/${employeeData.id}`,
        method: 'PUT',
        body: employeeData,
      }),
      invalidatesTags: ['Employees'],
    }),
    addEmployee: builder.mutation({
      query: employeeData => ({
        url: `create`,
        method: 'POST',
        body: employeeData,
      }),
      invalidatesTags: ['Employees'],
    }),
  }),
});

export const {
  useGetEmployeesQuery,
  useAddEmployeeMutation,
  useEditEmployeeMutation,
} = apiSlice;
