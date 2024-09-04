import React from "react";
import { Text, View, Pressable,Image, Alert } from 'react-native';
import styles from "../src/styles/GlobalStyles";
import iconLogin from '../src/images/iconLogin.png';
import MyComponent from '../src/Component/TextInput.jsx'; 
import { Button, Card, Tittle, TextInput} from "react-native-paper";
import HomeImg from "../src/images/HomeImg.png";
import { useNavigation } from '@react-navigation/native';

const PQR =()=>
{
    const navigation = useNavigation(); 
   
    const showAlert = () => {
        Alert.alert(
          "PQR", 
          "Your PQR has been submitted successfully", 
        )
    }
    const openDrawer = () => {
        navigation.openDrawer(); 
      };


    return(
        <View style={styles.home}>
            
            <View style={styles.head}>
                <Pressable onPress={openDrawer}>
                    <Image source={HomeImg}  style={styles.homeiconH }/>
                </Pressable>
             
                <Text style={styles.userText}>QuickShopper</Text>
            </View>

            <View style={styles.PQR}>

                <TextInput style={styles.TextInput}
                    placeholder='Email'
                  
                />
                <TextInput style={styles.TextInput}
                    placeholder='Name'
                 
                />
                <TextInput style={styles.TextInput}
                    placeholder='Number phone'
                   
                    keyboardType='numeric'
                />
                <TextInput style={styles.TextInput}
                    placeholder='Type'
                   
                />
                <TextInput style={styles.TextInput}
                    placeholder='Subject'
                   
                    maxLength={30}
                    
                />

                <TextInput style={styles.TextInput}
                    placeholder='Description'
                   
                    maxLength={100}
                    multiline
                />
                
            </View>

            <View style={styles.sendP}>
            <Pressable
                onPress={showAlert }
                style={({ pressed }) => [
               {
                   backgroundColor: pressed ? '#26C6DA' : '#FFC107',
               },
                    styles.button
              ]}
            >
                    {({ pressed }) => (
                        <Text style={styles.buttonText}>
                        {pressed ? 'Pressed!' : 'Send'}
                        </Text>
                    )}
                </Pressable>
            </View>

        </View>
    );
};

export default PQR;