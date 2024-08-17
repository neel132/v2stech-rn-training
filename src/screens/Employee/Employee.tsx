import React from 'react';
import {FlatList, Text} from 'react-native';
import {useSelector} from 'react-redux';

export const Employee: React.FC = () => {
  const {employeeData} = useSelector((state: any) => state.employee);
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
