import React from "react";
import {View, Text, Pressable, Image} from "react-native";
import styles from "../styles/GlobalStyles";
import HomeImg from "../images/HomeImg.png";
import { useNavigation } from '@react-navigation/native';



export default Favorites=()=>
{
    const navigation = useNavigation(); 


    const handlehome = () => 
        {
  
        navigation.navigate('Home');  

    };


    return(

        <View style={styles.home}>

            

            <View style={styles.favorites}>
                <Pressable onPress={handlehome}>
                    <Image source={HomeImg}  style={styles.homeiconO}/>
                </Pressable>
                <Text style={styles.text} >Offers</Text>
            </View>


        </View>


    );

};