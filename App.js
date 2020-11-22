import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './lib/screens/HomeScreen';
import NewAdScreen from './lib/screens/NewAdScreen';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Ads"
          component={HomeScreen}
        />
        <Drawer.Screen
          name="New Ad"
          component={NewAdScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


