import React,{useContext} from "react";
import {View, Text,  Image, Pressable} from 'react-native';
import styles from '../styles/GlobalStyles';
import { useNavigation } from '@react-navigation/native';
import menos from '../images/menos.png';
import { CartContext } from '../context/cartContext';



const ShoppingCard =({product})=>
{
    const navigation = useNavigation(); 
    const { dispatch } = useContext(CartContext); 
    


    const handleProductDetails = () => 
        {
  
        navigation.navigate('ProductDetails', { product });  

    };
    const handleDelete = () => {
 
dispatch({ type: "DELETE", payload: { id: product.id } }) 
              
        
    };

    return(
        <View style={styles.ShoppingCard}>
            
            <Image source={product.photo} style={styles.photo} />
            <View>
                <Text style={styles.TextProductCart}>{product.name}</Text>
                <Text style={styles.TextProductCart}>{product.price}</Text>
                <Pressable onPress={handleDelete} style={styles.homeiconH}>
                    <Image source={menos} />
                </Pressable>
            </View>
            
        
        </View>
    );
};
export default ShoppingCard;