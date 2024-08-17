import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {AuthStack} from './src/navigation/AuthNavigator';
import {RootNavigation} from './src/navigation';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <RootNavigation>
        <AuthStack />
      </RootNavigation>
    </Provider>
  );
}

export default App;
