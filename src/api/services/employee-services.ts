import {axiosInstance} from '../../config/axiosConfig'
import {employees} from '../endpoints';

const getEmployeeDataApi = async () => {
  try {
    const response = await axiosInstance.get(employees);
    return response.data;
  } catch (e) {
    console.log('Error calling getEmployee api', e);
  }
};

export {getEmployeeDataApi};
