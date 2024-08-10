import {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {ThemeContext} from '../../context/ThemeContext';

export const ThemeSwitcher = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);
  const fontColor = theme === 'light' ? 'black' : 'white';
  const backgroundColor = theme === 'light' ? 'white' : 'black';
  return (
    <View style={{backgroundColor}}>
      <Text style={{color: fontColor}}>Current theme: {theme}</Text>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
};
