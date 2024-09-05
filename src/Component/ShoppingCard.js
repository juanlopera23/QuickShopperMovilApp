import React from "react";
import {View, Text,  Image} from 'react-native';
import styles from '../styles/GlobalStyles';
import { useNavigation } from '@react-navigation/native';



const ShoppingCard =({product})=>
{
    const navigation = useNavigation(); 
    


    const handleProductDetails = () => 
        {
  
        navigation.navigate('ProductDetails', { product });  

    };

    return(
        <View style={styles.card}>
            
            <Image source={product.photo} style={styles.photo} />
            <Text>{product.name}</Text>
            <Text>{product.price}</Text>
            
        
        </View>
    );
};
export default ShoppingCard;