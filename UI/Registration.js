import React, { useState } from 'react';
import { View, Text, Button, Image, Pressable} from 'react-native';
import MyComponent from '../src/Component/TextInput.jsx'; 
import styles from '../src/styles/GlobalStyles.js';
import iconLogin from '../src/images/iconLogin.png';
import { useNavigation } from '@react-navigation/native';


const Registration = () => {

  const navigation=useNavigation();
 
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

       <MyComponent label="Email" editable={false} />
      <MyComponent label="First Name" editable={false} />
      <MyComponent label="Last Name" editable={false} />
      <MyComponent label="Phone Number" editable={false}  keyboardType='numeric'/>
      <MyComponent label="City" editable={false} />
      <MyComponent label="Password" editable={false} secureTextEntry={true} />

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
                    {pressed ? 'Pressed!' : 'Go to Home'}
                </Text>
            )}
        </Pressable>
        
     
    </View>
  );
};

export default Registration;