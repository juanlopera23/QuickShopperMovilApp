import React from "react";
import {View, Text, Pressable, Image} from 'react-native';
import styles from '../src/styles/GlobalStyles';
import { useNavigation } from '@react-navigation/native';
import ProductDetails from './ProductDetails';


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
            <Text>{product.name}</Text>
            <Text>{product.price}</Text>
            </Pressable>
        
        </View>
    );
};
export default product;