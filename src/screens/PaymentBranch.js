import React from "react";
import {View,Text, Pressable, Image} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import HomeImg from "../images/HomeImg.png";
import styles from "../styles/GlobalStyles";

const Paymentbranch =()=>
{
    const navigation=useNavigation();
    const handleHome=()=>
        {
            navigation.navigate('Home')
    
        }
    return(
        <View  style={styles.home}>
            <View style={styles.head}>
                <Pressable onPress={handleHome}>
                    <Image source={HomeImg}  style={styles.homeiconH }/>
                </Pressable>
                <Text style={styles.textShopping}>Shopping Cart</Text>
            </View>

            
        </View>

    );
};
export default Paymentbranch;