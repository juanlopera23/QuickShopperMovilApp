import 'react-native-gesture-handler';
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from '../screens/Login';
import Registration from '../screens/Registration';
import Home from '../screens/Home';
import User from '../screens/User';
import PQR from '../screens/PQR';
import MyPurchases from '../screens/MyPurchases';
import Favorites from '../screens/Favorites';
import Categories from '../screens/Categories';
import Offers from '../screens/Offers';
import ProductDetails from '../screens/ProductDetails';
import ShoppingCart from '../screens/Shoppingcart';
import PaymentBranch from '../screens/PaymentBranch';
import Category from '../screens/Category'
import { FavoriteProvider } from '../context/favoriteContext';
import { CartProvider } from '../context/cartContext';



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

const navApp = () => {
  
  

  return (

   
    <PaperProvider> 

    
      <CartProvider>
        <FavoriteProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="App">
              <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
              <Stack.Screen name="Registration" component={Registration} options={{ headerShown: false }}/>
              <Stack.Screen name="Categories" component={Categories}  options={{ headerShown: false }}/>
              <Stack.Screen name="Offers" component={Offers}  options={{ headerShown: false }}/>
              <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ headerShown: false }}/>
              <Stack.Screen name="App" component={DrawerNavigator} options={{ headerShown: false }} />
              <Stack.Screen name="ShoppingCart" component={ShoppingCart} options={{ headerShown: false }} />
              <Stack.Screen name="PaymentBranch" component={PaymentBranch} options={{ headerShown: false }} />
              <Stack.Screen name="Category" component={Category} options={{ headerShown: false }} />
       
            </Stack.Navigator>

          </NavigationContainer>
        </FavoriteProvider>
      </CartProvider>
 
    </PaperProvider>  
   
  );
};

export default navApp;