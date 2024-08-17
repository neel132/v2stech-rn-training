import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

const linking = {
  prefixes: ['rnchat://'],
  config: {
    screens: {
      Home: 'home',
      Employee: 'employee',
    },
  },
};

export const RootNavigation: React.FC<any> = props => {
  return (
    <NavigationContainer linking={linking}>
      {props.children}
    </NavigationContainer>
  );
};
