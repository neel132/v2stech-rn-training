import {useRef, useState} from 'react';
import {Button, TextInput, View} from 'react-native';

export const Register = () => {
  const [text, setText] = useState('');
  const inputRef = useRef(null);
  const focusInput = () => {
    inputRef.current && inputRef.current.focus();
  };
  const clearInput = () => {
    inputRef.current && inputRef.current.clear();
  }
  return (
    <View>
      <TextInput
        ref={inputRef}
        value={text}
        onChangeText={setText}
        style={{height: 50, borderColor: 'gray', borderWidth: 1,}}
      />
      <Button title="Focus the input" onPress={focusInput} />
      <Button title="Clear the input" onPress={clearInput} />
    </View>
  );
};
