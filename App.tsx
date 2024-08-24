import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './UI/Login';
import Registration from './UI/Registration';
import Home from './UI/Home';

const Stack = createStackNavigator();

const App = () => {
  const [users, setUsers] = useState([]); // Estado global de usuarios

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login">
          {props => (
            <Login 
              {...props} 
              users={users} 
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Registration">
          {props => (
            <Registration 
              {...props} 
              users={users} 
              setUsers={setUsers} 
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;