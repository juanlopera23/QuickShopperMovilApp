import React from "react";
import {View, Text, Pressable, Image} from "react-native";
import styles from "../src/styles/GlobalStyles";
import HomeImg from "../src/images/HomeImg.png"
import { useNavigation } from '@react-navigation/native';


const Favorites=()=>
{
    const navigation = useNavigation(); 
    const openDrawer = () => {
        navigation.openDrawer(); 
      };


    return(

        <View style={styles.home}>
            
            

            <View style={styles.favorites}>
                <Pressable onPress={openDrawer}>
                    <Image source={HomeImg}  style={styles.homeiconC}/>
                </Pressable>
            
                
                <Text style={styles.text} >Favorites</Text>
            </View>


        </View>


    );

};
export default Favorites;