import {call, put, takeEvery} from 'redux-saga/effects';
import {getEmployeeDataApi} from '../../api/services';
import {
  employeeDataFailure,
  employeeDataSuccess,
  requestEmployeeData,
} from '../slices/employee-slice';
function* getEmployeeData() {
  try {
    const response = yield call(getEmployeeDataApi);
    if (response) {
      yield put(
        employeeDataSuccess({
          data: response.data,
        }),
      );
    }
  } catch (e) {
    yield put(employeeDataFailure(e));
  }
}

export function* watchGetEmployeeData() {
  yield takeEvery(requestEmployeeData.type, getEmployeeData);
}
