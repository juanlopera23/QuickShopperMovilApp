import React, { useState, useReducer, useEffect } from 'react';
import { View, Text, Alert, Pressable,KeyboardAvoidingView,Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import MyComponent from '../Component/TextInput.jsx'; 
import styles from '../styles/GlobalStyles.js';
import iconLogin from '../images/iconLogin.png';
import auth from '@react-native-firebase/auth'; 



const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation();

  const showAlert = (message) => {
    Alert.alert("QUICKSHOPPER", message)
  };

  const loginUser = async () => {
    if (!email || !password) {
      showAlert("Please fill in both email and password.")
      return;
    }

    try {
      await auth().signInWithEmailAndPassword(email, password)

      console.log('User logged in successfully.')

      navigation.navigate('Home')
    } catch (error) {
     
      if (error.code === 'auth/user-not-found') showAlert("No user found with this email.")

       else if (error.code === 'auth/wrong-password') showAlert("Incorrect password. Please try again.")

       else {
        showAlert("Login failed. Please try again.")
      }
    }
  };
    const handleHome=()=>
    {
        navigation.navigate('Home')
    }


    return (

        
        

        <View 
         style={styles.container}>
            
            
            <View >
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
            
                onPress={loginUser}
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
            <Pressable onPress={handleHome}>
                <Text style={styles.buttonHome}>
                    continue as a guest
                </Text>

            </Pressable>
            
            
        </View>
    );
};

export default Login;
