import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import MyComponent from '../src/Component/TextInput.jsx'; 
import styles from '../src/styles/GlobalStyles.js';

const Registration = () => {
  
  

  
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  const [password, setPassword] = useState('');
  

 
  const handleRegistration = () => {
    const newUser = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber, 
      city: city,
      password:password
    };

    setUsers([...users, newUser]);


    setEmail('');
    setFirstName('');
    setLastName('');
    setPhoneNumber('');
    setCity('');
    setPassword('');

    navigation.navigate('Home');
  };

  return (
    <View>
       <View><Text>Registration</Text></View>

       <MyComponent label="Email" onChangeText={setEmail} />
      <MyComponent label="First Name" onChangeText={setFirstName} />
      <MyComponent label="Last Name" onChangeText={setLastName} />
      <MyComponent label="Phone Number" onChangeText={setPhoneNumber}  keyboardType='numeric'/>
      <MyComponent label="City" onChangeText={setCity} />
      <MyComponent label="Password" onChangeText={setPassword} secureTextEntry={true} />


      <Button title="Register" onPress={handleRegistration} />

     
    </View>
  );
};

export default Registration;