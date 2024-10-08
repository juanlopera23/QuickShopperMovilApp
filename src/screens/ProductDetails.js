import React, {useContext} from "react";
import {View, Text, Pressable, Image, Alert} from 'react-native';
import styles from '../styles/GlobalStyles';
import { useNavigation } from '@react-navigation/native';
import HomeImg from "../images/HomeImg.png";
import { CartContext } from "../context/cartContext";
import { ProductsContext } from "../context/productsContext";




const ProductDetails =({route})=>
{
    const{state,dispatch}=useContext(CartContext);
    
    const ADD="ADD";
    const navigation = useNavigation(); 
    
    const {product}=route.params

  




    const addProduct=()=>
    {
        
        dispatch({type:ADD ,payload:product})
    }

   

    const handleHome = () => 
        {
  
        navigation.navigate('Home');  

    };
    const handleShoppingCart = () => 
        {
  
            navigation.navigate('ShoppingCart',{product});  
        

    };
    
    

    return(
        <View style={styles.home}>

            

            <View style={styles.favorites}>
                <Pressable onPress={handleHome}>
                    <Image source={HomeImg}  style={styles.homeiconC}/>
                </Pressable>
                <Text style={styles.text} >Details</Text>
            </View>

            <View style={styles.ProductDetails}>
                <Image source={product.photo} style={styles.photoDetails} />
                <Text style={styles.textDetailsTitle}>{product.name}</Text>
                <Text style={styles.textDetails}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of 

                    </Text>                
            </View>
            <View style={styles.viewDetails}>
                <Pressable
            
                    onPress={addProduct}
                    style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? '#26C6DA' : '#FFC107',
                    },
                    styles.buttonDetails
                    ]}
                >
                    {({ pressed }) => (
                    <Text style={styles.buttonText}>
                        {pressed ? 'Pressed!' : 'Add to Cart'}
                    </Text>
                    )}
                </Pressable>

                <Pressable
            
                    onPress={handleShoppingCart}
                    style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? '#26C6DA' : '#FFC107',
                    },
                    styles.buttonDetails
                    ]}
                >
                    {({ pressed }) => (
                        <Text style={styles.buttonText}>
                            {pressed ? 'Pressed!' : 'Go to Cart'}
                        </Text>
                    )}
                </Pressable>

            </View>



        </View>

    );
};
export default ProductDetails;