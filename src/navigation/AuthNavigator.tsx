import {createStackNavigator} from '@react-navigation/stack';
import {Employee, Home, NotificationSettings} from '../screens';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NotificationSettings"
        component={NotificationSettings}
      />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Employee" component={Employee} />
    </Stack.Navigator>
  );
};
