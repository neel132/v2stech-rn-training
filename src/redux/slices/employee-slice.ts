import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  employeeData: [],
  loading: false,
  error: '',
};

const employee = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    requestEmployeeData: state => {
      state.loading = true;
    },
    employeeDataSuccess: (state, action) => {
      state.loading = false;
      state.employeeData = action.payload.data;
      state.error = '';
    },
    employeeDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default employee.reducer;
export const {requestEmployeeData, employeeDataSuccess, employeeDataFailure} =
  employee.actions;
