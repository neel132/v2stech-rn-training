import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {AuthStack} from './src/navigation/AuthNavigator';
import {RootNavigation} from './src/navigation';
import {I18nextProvider} from 'react-i18next';
import i18n from './i18n';
import {Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';

function App(): JSX.Element {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('A new FCM message arrived!', remoteMessage);
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));

      // Only for the foreground cloud message we need to manually generate the notification using - react-native-push-notification

      // PushNotification.localNotification({
      //   title: remoteMessage.notification.title,
      //   body: remoteMessage.notification.body,
      //   sound: true,
      //   priority: 'high',
      //   vibrate: true,
      // });
    });
    return unsubscribe;
  }, []);
  useEffect(() => {
    const unsubscribe = messaging().setBackgroundMessageHandler(
      async remoteMessage => {
        console.log('Message handled in the background!', remoteMessage);
      },
    );
    return unsubscribe;
  }, []);
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
