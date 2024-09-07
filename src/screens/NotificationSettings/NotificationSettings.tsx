import {Pressable, Text} from 'react-native';
import {PERMISSIONS, request} from 'react-native-permissions';
import messaging from '@react-native-firebase/messaging';

const NotificationSettings: React.FC = () => {
  const requestNotifcationPermission = () => {
    // Implementation for requesting notification permission
    request(PERMISSIONS.ANDROID.POST_NOTIFICATIONS)
      .then(response => {
        console.log('Response -', response);
        if (response === 'granted') {
          // User has granted permission
          const token = messaging()
            .getToken()
            .then(response => {
              // Assume we save this user fcm token in a database.
              return response;
            })
            .catch(error => console.log('Error generating token', error));
          console.log('Token -', token);
        }
      })
      .catch(error => console.log(error));
  };
  return (
    <Pressable onPress={requestNotifcationPermission}>
      <Text
        style={{
          textAlign: 'center',
          color: 'white',
          padding: 10,
          borderWidth: 1,
          backgroundColor: 'blue',
          borderRadius: 20,
          margin: 20,
        }}>
        Notification Permission
      </Text>
    </Pressable>
  );
};
export {NotificationSettings};
