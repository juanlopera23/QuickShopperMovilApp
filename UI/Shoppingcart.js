import React from "react";
import {View, Text, Pressable, Image} from 'react-native';
import styles from "../src/styles/GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import HomeImg from "../src/images/HomeImg.png";
import Home from "./Home";


const ShoppingCart=({route})=>
{
    const navigation=useNavigation();
    const {product}=route.params
    const handleHome=()=>
    {
        navigation.navigate('Home')

    }
    const Shopping= [] ;
    Shopping.push(product);
    return(


        <View style={styles.home}>

            <View style={styles.head}>
                <Pressable onPress={handleHome}>
                    <Image source={HomeImg}  style={styles.homeiconH }/>
                </Pressable>
                <Text style={styles.textShopping}>Shopping Cart</Text>
            </View>
            <View>
                if(Shopping)
            <FlatList

                data={Shopping}
                renderItem={({item})=> <ProductCard Shopping={item}/>}
                keyExtractor={(item)=> item.id.toString()}
 
            />
            </View>
            
        </View>
    );
    

}

export default ShoppingCart;