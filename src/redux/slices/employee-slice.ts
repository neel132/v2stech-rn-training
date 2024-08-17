import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  employeeData: [
    {
      id: 1,
      name: 'John Doe',
      department: 'Engineering',
    },
  ],
};

const employee = createSlice({
  name: 'employee',
  initialState,
  reducers: {},
});

export default employee.reducer;
export const {} = employee.actions;
