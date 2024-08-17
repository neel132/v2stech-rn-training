import React from 'react';
import {FlatList, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {requestEmployeeData} from '../../redux/slices/employee-slice';

export const Employee: React.FC = () => {
  const {employeeData} = useSelector((state: any) => state.employee);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(requestEmployeeData());
  }, [dispatch]);
  const renderItem = ({item, index}: any) => {
    return <Text key={index}>{item.employee_name}</Text>;
  };
  return (
    <>
      <FlatList
        data={employeeData}
        extraData={employeeData}
        renderItem={renderItem}
        keyExtractor={(_, index) => String(index)}
      />
    </>
  );
};
