import {all} from 'redux-saga/effects';
import {watchGetEmployeeData} from './employeeSaga';

export default function* rootSaga() {
  yield all([watchGetEmployeeData()]);
}
