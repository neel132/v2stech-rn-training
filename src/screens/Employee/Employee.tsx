import React from 'react';
import {FlatList, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {getEmployeeDataApi} from '../../api/services';

export const Employee: React.FC = () => {
  const {employeeData} = useSelector((state: any) => state.employee);
  React.useEffect(() => {
    getEmployeeDataApi()
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }, []);
  const renderItem = ({item, index}: any) => {
    return <Text key={index}>{item.name}</Text>;
  };

  return (
    <>
      <FlatList
        data={employeeData}
        renderItem={renderItem}
        keyExtractor={(_, index) => String(index)}
      />
    </>
  );
};
