import React from 'react';
import {ThemeSwitcher} from './src/screens';
import {ThemeProvider} from './src/context/ThemeContext';
import {SafeAreaView} from 'react-native';

function App(): JSX.Element {

  return (
    <SafeAreaView>
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>
    </SafeAreaView>
  );
}

export default App;
