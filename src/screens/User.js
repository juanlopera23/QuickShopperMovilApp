import * as React from 'react';
import { Text, View, Pressable,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/GlobalStyles.js';
import iconLogin from '../images/iconLogin.png';




const User = () => {
  const navigation = useNavigation(); 


  const handleLogin = () => {


    navigation.navigate('Login');  

};

  
  return (
    <View style={styles.home}>
      <View style={styles.head}>
      <Image source={iconLogin}  style={styles.Logo2}/>
        <Text style={styles.userText}>QuickShopper</Text>
      </View>
      <View style={styles. buttonUser}>
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
              {pressed ? 'Pressed!' : 'Log Out'}
            </Text>
          )}
        </Pressable>
      </View>
    </View>
  );
};

export default User;
