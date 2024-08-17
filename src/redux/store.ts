import {configureStore} from '@reduxjs/toolkit';
import employee from './slices/employee-slice';

const store = configureStore({
  reducer: {
    employee,
  },
});

export default store;
