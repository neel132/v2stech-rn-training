import {createStackNavigator} from '@react-navigation/stack';
import {Employee, Home} from '../screens';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Employee" component={Employee} />
    </Stack.Navigator>
  );
};
