import React,{useContext} from "react";
import {View, Text, Pressable, Image,StyleSheet} from 'react-native';
import styles from '../styles/GlobalStyles';
import { useNavigation } from '@react-navigation/native';
import { FavoriteContext } from "../context/favoriteContext";
import { CartContext } from "../context/cartContext";

import cart from '../images/cart.png';


const product =({product})=>
{
   
    const {  dispatch } = useContext(CartContext);
    const {  dispatch:favoriteDispatch } = useContext(FavoriteContext);
    const navigation = useNavigation(); 

 

    
    const addCart = () => {
        dispatch({type:"ADD", payload:product})
    }

    const handleDelete = () => {
 
        favoriteDispatch({ type: "DELETE", payload: { key: product.key } }) 
              
        
    }
    


    const handleProductDetails = () => 
        {
  
        navigation.navigate('ProductDetails', { product });  

    };

    const cardStyle = product.offer ? localStyles.offerCard : styles.card;
    const textProductPriceStyle = product.offer ? localStyles.offerTextProductPrice : styles.textProductPrice;

    return(
        <View 
        
        style={cardStyle}>
            <Pressable onPress={handleProductDetails}>
                <Image source={{ uri: product.imgURL }} style={styles.photo} />
                <Text style={styles.textProduct}>{product.name}</Text>
                <Text style={textProductPriceStyle}>{product.price}</Text>
                <View style={styles.viewProduct}>
                    
                   
                    <Pressable onPress={addCart}>
                        <Image source={cart}  style={styles.homeiconH}
                        />

                    </Pressable>
                </View>
                <View>
                    <Pressable onPress={handleDelete} style={styles.homeiconH}>
                        <Text style={styles.deleteFavorite}> DELETE</Text>
                    </Pressable>
                </View>
            </Pressable>
        
        </View>
    );
};

const localStyles = StyleSheet.create({
    offerCard: {
        ...styles.card,
        backgroundColor: "yellow",
    },
    offerTextProduct: {
        ...styles.textProduct,
        color: "black",
    },
    offerTextProductPrice: {
        ...styles.textProductPrice,
        color: "red",
    },
})
export default product;