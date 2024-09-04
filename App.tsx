import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from './UI/Login';
import Registration from './UI/Registration';
import Home from './UI/Home';
import User from './UI/User';
import PQR from './UI/PQR';
import MyPurchases from './UI/MyPurchases';
import Favorites from './UI/Favorites';
import Categories from './UI/Categories';
import Offers from './UI/Offers';
import ProductDetails from './UI/ProductDetails';
import ShoppingCart from './UI/Shoppingcart';



const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const DrawerNavigator=()=>
{
  return (
    <Drawer.Navigator initialRouteName="Home"   >
      <Drawer.Screen name="User" component={User}  options={{ headerShown: false }}/>
      <Drawer.Screen name="Home" component={Home}  options={{ headerShown: false }} />
      <Drawer.Screen name="My Purchases" component={MyPurchases}   options={{ headerShown: false }}/>
      <Drawer.Screen name="Favorites" component={Favorites}   options={{ headerShown: false }}/>
      <Drawer.Screen name="PQR" component={PQR}  options={{ headerShown: false }}/>


    </Drawer.Navigator>
  );

}

const App = () => {
  
  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Registration" component={Registration}  />
        <Stack.Screen name="Categories" component={Categories}  options={{ headerShown: false }}/>
        <Stack.Screen name="Offers" component={Offers}  options={{ headerShown: false }}/>
        <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ headerShown: false }}/>
        <Stack.Screen name="App" component={DrawerNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
        
       
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;