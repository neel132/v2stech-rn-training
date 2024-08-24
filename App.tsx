import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {AuthStack} from './src/navigation/AuthNavigator';
import {RootNavigation} from './src/navigation';
import {I18nextProvider} from 'react-i18next';
import i18n from './i18n';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <RootNavigation>
          <AuthStack />
        </RootNavigation>
      </I18nextProvider>
    </Provider>
  );
}

export default App;
