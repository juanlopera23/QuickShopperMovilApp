import React, { useState, useReducer, useEffect } from 'react';
import { View, Text, Alert, Pressable,KeyboardAvoidingView,Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import MyComponent from '../Component/TextInput.jsx'; 
import styles from '../styles/GlobalStyles.js';
import iconLogin from '../images/iconLogin.png';
import { reducer, initialStates } from '../context/userReducer';



const Login = () => {
    const [state, dispatch] = useReducer(reducer, initialStates); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const navigation = useNavigation(); 


    const handleLogin = () => {
    
        dispatch({
            type: 'LOGIN',
            payload: {
                email: email,
                password: password,
            }
        });
    };

    useEffect(() => {
        if (state.isLoggedIn) {
            navigation.navigate('Home'); 
        }
    }, [state.isLoggedIn]);
    
   


    return (

        
        

        <View 
         style={styles.container}>
            
            
            <View style={styles.logoContainer}>
            <Image source={iconLogin} style={styles.Logo1} />
            </View>
            
            <View style={styles.container2}>
            <TextInput
                    label="Email"
                    value={email}
                    onChangeText={setEmail} 
                    style={styles.input}
                />
                <TextInput
                    label="Password"
                    value={password}
                    onChangeText={setPassword} 
                    secureTextEntry={true}
                    style={styles.input}
                />
            

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
