import React, { useEffect, useState } from 'react';
import { View, Text, Alert, Image, Pressable, ScrollView, KeyboardAvoidingView} from 'react-native';
import { TextInput } from 'react-native-paper';
import MyComponent from '../Component/TextInput.jsx'; 
import styles from '../styles/GlobalStyles.js';
import iconLogin from '../images/iconLogin.png';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';


const Registration = () => {
   
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [id, setId] = useState('')
      
    const showAlert = (message) => {
      Alert.alert("QUICKSHOPPER", message);
    }

      const navigation = useNavigation();
    
      const registerUser = async () => {
        if (!email || !password || !firstName || !lastName || !phone || !id) {
          showAlert("Please fill all the fields.")
          return;
        }
    
        try {
          await auth().createUserWithEmailAndPassword(email, password)

          console.log('User registered successfully.')

          navigation.navigate('Home')
        } catch (error) {
          
          if (error.code === 'auth/email-already-in-use') {
            showAlert("The email address is already in use!")
          } else {
            showAlert("Registration failed. Please try again.")
          }
        }
      };
    

 
  
  return (
    
    <View style={styles.home}>
          
      <View style={styles.head}>
        <Image source={iconLogin}  style={styles.Logo2}/>
        <Text style={styles.textR}>" We're excited to get started"</Text>
        </View>
          <ScrollView >

            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              style={styles.label}
              />
            <TextInput
              placeholder="First Name"
              value={firstName}
              onChangeText={setFirstName}
              style={styles.label}
              />
            <TextInput
              placeholder="Last Name"
              value={lastName}
              onChangeText={setLastName}
              style={styles.label}
            />
            <TextInput
              placeholder="Phone Number"
              value={phone}
              keyboardType="numeric"
              onChangeText={setPhone}
              style={styles.label}
            />
            <TextInput
              placeholder="ID"
              value={id}
              keyboardType="numeric"
              onChangeText={setId}
              style={styles.label}
            />
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              style={styles.label}
            />

            <Pressable
            
              onPress={registerUser}
              disabled={email === '' || password === ''}
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
                </ScrollView>
        
     
    </View>
   
  );
};

export default Registration;