import React, { useState } from 'react';
import { View, Text, Alert, Pressable,KeyboardAvoidingView,Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import MyComponent from '../src/Component/TextInput.jsx'; 
import styles from '../src/styles/GlobalStyles.js';
import iconLogin from '../src/images/iconLogin.png';



const Login = () => {
    
    const navigation = useNavigation(); 

    const handleLogin = () => {
       
        navigation.navigate('App');  
       
    };

    return (

        
        

        <View 
         style={styles.container}>
            
            
            <View style={styles.logoContainer}>
            <Image source={iconLogin} style={styles.Logo1} />
            </View>
            
            <View style={styles.container2}>
            <MyComponent label="Email" editable={false}  />
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
                        {pressed ? 'Pressed!' : 'Login'}
                    </Text>
                )}
            </Pressable>
            

            <Pressable
                onPress={() => navigation.navigate('Registration')}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? '#26C6DA' : '#FFC107',
                    },
                    styles.button
                ]}
            >
                {({ pressed }) => (
                    <Text style={styles.buttonText}>
                        {pressed ? 'Pressed!' : 'Go to Registration'}
                    </Text>
                )}
            </Pressable>
            </View>
            
        </View>
    );
};

export default Login;
