import React,{useContext} from "react";
import {View, Text,  Image, Pressable} from 'react-native';
import styles from '../styles/GlobalStyles';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../context/cartContext';



const ShoppingCard =({product})=>
{
    const navigation = useNavigation(); 
    const { dispatch } = useContext(CartContext); 
    



    const handleDelete = () => {
 
        dispatch({ type: "DELETE", payload: { key: product.key } }) 
              
        
    };

    return(
        <View style={styles.ShoppingCard}>
            
            <Image source={{ uri: product.imgURL }} style={styles.photo} />
            <View>
                <Text style={styles.TextProductCart}>{product.name}</Text>
                <Text style={styles.TextProductCart}>{product.price}</Text>
                <Pressable onPress={handleDelete} style={styles.homeiconH}>
                    <Text style={styles.deleteButton}> DELETE</Text>
                </Pressable>
            </View>
            
        
        </View>
    );
};
export default ShoppingCard;