import React, { useState } from 'react';
import { View, Text, Button, Image, Pressable} from 'react-native';
import MyComponent from '../src/Component/TextInput.jsx'; 
import styles from '../src/styles/GlobalStyles.js';
import iconLogin from '../src/images/iconLogin.png';
import { useNavigation } from '@react-navigation/native';


const Registration = () => {
 
  const handleLogin = () => {
  
    navigation.navigate('App');  
     
 };

 
  

 
  

  return (
    <View style={styles.home}>
          
       <View style={styles.head}>
           <Image source={iconLogin}  style={styles.Logo2}/>
        <Text style={styles.textR}>" We're excited to get started"
        </Text>
        </View>

       <MyComponent label="Email" onChangeText={setEmail} />
      <MyComponent label="First Name" onChangeText={setFirstName} />
      <MyComponent label="Last Name" onChangeText={setLastName} />
      <MyComponent label="Phone Number" onChangeText={setPhoneNumber}  keyboardType='numeric'/>
      <MyComponent label="City" onChangeText={setCity} />
      <MyComponent label="Password" onChangeText={setPassword} secureTextEntry={true} /

      <Pressable
            
            onPress={handleLogin}
            style={({ pressed }) => [
                {
                    backgroundColor: pressed ? '#26C6DA' : '#FFC107',
                },
                styles.button
            ]}
        >
            {({ pressed }) => (
                <Text style={styles.buttonText}>
                    {pressed ? 'Pressed!' : 'Login'}
                </Text>
            )}
        </Pressable>
        
     
    </View>
  );
};

export default Registration;