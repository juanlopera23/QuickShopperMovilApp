import React from "react";
import {View, Text, Pressable, Image} from 'react-native';
import styles from '../src/styles/GlobalStyles';
import { useNavigation } from '@react-navigation/native';
import HomeImg from "../src/images/HomeImg.png";
import ShoppingCart from "./Shoppingcart";




const ProductDetails =({route})=>
{
    const navigation = useNavigation(); 
    const {product}=route.params


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
                <Text style={styles.textProduct}>{product.name}</Text>
                <Text style={styles.textDetails}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of 

                    </Text>                
            </View>
            <View>

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
                    {pressed ? 'Pressed!' : 'Add to Cart'}
                </Text>
            )}
        </Pressable>

            </View>



        </View>

    );
};
export default ProductDetails;