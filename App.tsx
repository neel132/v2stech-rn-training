import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {Employee} from './src/screens';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Employee />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
