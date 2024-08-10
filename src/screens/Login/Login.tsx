import React, {useMemo, useState} from 'react';
import {Button, Text, View} from 'react-native';

export const Login: React.FC<{}> = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('React Native');

  const expensiveCalculation = useMemo(() => {
    console.log('Expensive calculation running...');
    return count * 2;
  }, [count]);

  return (
    <View>
      <Text>{text}</Text>
      <Text>Result: {expensiveCalculation}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
      <Button title="Change Text" onPress={() => setText('Changed Text')} />
    </View>
  );
};
