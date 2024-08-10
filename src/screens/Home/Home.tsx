import React, {useCallback, useState} from 'react';
import {View, Text} from 'react-native';
import {CustomButton} from '../../components';

export const Home: React.FC = () => {
  const [count, setCount] = useState(0);

  const onIncrement = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);
  console.log('count state -', count);
  return (
    <View>
      <Text>Count: {count}</Text>
      <CustomButton title="Press me" onPress={onIncrement} />
    </View>
  );
};
