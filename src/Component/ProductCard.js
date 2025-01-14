import React,{useContext} from "react";
import {View, Text, Pressable, Image,StyleSheet} from 'react-native';
import styles from '../styles/GlobalStyles';
import { useNavigation } from '@react-navigation/native';
import { FavoriteContext } from "../context/favoriteContext";
import { CartContext } from "../context/cartContext";
import star from '../images/star.png';
import cart from '../images/cart.png';


const product =({product})=>
{
    const {  dispatch } = useContext(FavoriteContext);
    const {  dispatch:cartDispatch } = useContext(CartContext);
    const navigation = useNavigation(); 

    

    const addFavorite = () => {
        dispatch({type:"ADD" ,payload:product})
    };
    const addCart = () => {
        cartDispatch({type:"ADD", payload:product})
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
                    <Pressable onPress={addFavorite}>
                        <Image source={star}  style={styles.homeiconH}
                        />
                    </Pressable >
                    <Pressable onPress={addCart}>
                        <Image source={cart}  style={styles.homeiconH}
                        />

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