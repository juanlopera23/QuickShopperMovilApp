import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from './UI/Login';
import Registration from './UI/Registration';
import Home from './UI/Home';
import User from './UI/User';


const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const DrawerNavigator=()=>
{
  return (
    <Drawer.Navigator initialRouteName="Home"  >
      <Drawer.Screen name="Home" component={Home}  />
      <Drawer.Screen name="User" component={User} />
    </Drawer.Navigator>
  );

}

const App = () => {
  
  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Registration" component={Registration} options={{ headerShown: false }} />
        <Stack.Screen name="App" component={DrawerNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;