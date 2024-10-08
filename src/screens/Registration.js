import React, { useEffect, useState } from 'react';
import { View, Text, Alert, Image, Pressable, ScrollView, KeyboardAvoidingView} from 'react-native';
import { TextInput } from 'react-native-paper';
import MyComponent from '../Component/TextInput.jsx'; 
import styles from '../styles/GlobalStyles.js';
import iconLogin from '../images/iconLogin.png';
import { useNavigation } from '@react-navigation/native';
import { useReducer } from 'react';
import { initialStates, reducer } from '../context/userReducer';


const Registration = () => {
    const [state, dispatch] = useReducer(reducer, initialStates);
    const add="ADD_USER";

    const [User, setUser] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        id: '',
        password: '',
    });
    
    

  const navigation=useNavigation();
 
  const handleLogin = () => {
  
    navigation.navigate('App');  
     
 };

    const showAlert = () => {
        Alert.alert(
            "QUICKSHOPPER", 
            "fill all the fields .", 
    )
}
  
const addUser = () => {
    const fields= Object.values(User).every(field => field !== ''); 

    if (fields) {
        dispatch({ type: add, payload: User });
        handleLogin(); 
    } else {
        showAlert(); 
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
                    value={User.email}
                    onChangeText={(text) => setUser({ ...User, email: text })}
                    style={styles.label}
                />
                <TextInput
                    placeholder="First Name"
                    value={User.firstName}
                    onChangeText={(text) => setUser({ ...User, firstName: text })}
                    style={styles.label}
                />
                <TextInput
                    placeholder="Last Name"
                    value={User.lastName}
                    onChangeText={(text) => setUser({ ...User, lastName: text })}
                    style={styles.label}
                />
                <TextInput
                    placeholder="Phone Number"
                    value={User.phone}
                    keyboardType='numeric'
                    onChangeText={(text) => setUser({ ...User, phone: text })}
                    style={styles.label}
                />
                <TextInput
                    placeholder="ID"
                    value={User.id}
                    keyboardType='numeric'
                    onChangeText={(text) => setUser({ ...User, id: text })}
                    style={styles.label}
                />
                <TextInput
                    placeholder="Password"
                    value={User.password}
                    onChangeText={(text) => setUser({ ...User, password: text })}
                    secureTextEntry={true}
                    style={styles.label}
                />

                <Pressable
            
                    onPress={addUser}
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