import React, { useState } from 'react';
import { View, Text, Alert, Pressable,KeyboardAvoidingView,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MyComponent from '../src/Component/TextInput.jsx'; 
import styles from '../src/styles/GlobalStyles.js';
import iconLogin from '../src/images/iconLogin.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation(); 

    const handleLogin = () => {
       // const user = users.find(user => user.email === email);

        //if (user) {
            navigation.navigate('Home');
        //} else {
            //Alert.alert(
              //  'User Not Found',
              //  'The user does not exist. Please check your email or register.',
               // [{ text: 'OK' }]
          //  );
        //}
    };

    return (

        
        

        <View 
         style={styles.container}>
            
            
            <View style={styles.logoContainer}>
            <Image source={iconLogin} style={styles.Logo1} />
            </View>
            
            <View style={styles.container2}>
            <MyComponent label="Email" onChangeText={setEmail}  />
            <MyComponent label="Password" onChangeText={setPassword} secureTextEntry={true} />
            

            <Pressable
            
                onPress={navigation.navigate('App', { screen: 'Home' })}
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
