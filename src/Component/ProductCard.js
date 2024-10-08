import React from "react";
import {View, Text, Pressable, Image} from 'react-native';
import styles from '../styles/GlobalStyles';
import { useNavigation } from '@react-navigation/native';



const product =({product})=>
{
    const navigation = useNavigation(); 
    


    const handleProductDetails = () => 
        {
  
        navigation.navigate('ProductDetails', { product });  

    };

    return(
        <View style={styles.card}>
            <Pressable onPress={handleProductDetails}>
            <Image source={product.photo} style={styles.photo} />
            <Text style={styles.textProduct}>{product.name}</Text>
            <Text style={styles.textProductPrice}>{product.price}</Text>
            </Pressable>
        
        </View>
    );
};
export default product;