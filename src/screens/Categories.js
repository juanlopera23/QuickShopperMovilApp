import React,{useContext, useEffect, useReducer, useState} from "react";
import {View, Text, Pressable, Image, FlatList} from "react-native";
import styles from "../styles/GlobalStyles";
import HomeImg from "../images/HomeImg.png";
import { useNavigation } from '@react-navigation/native';
import { CartContext } from "../context/cartContext";
import CategoryCard from "../Component/CategoryCard";

import glucometer from "../images/glucometer.jpg";
import camaro from "../images/camaro.jpg";
import rog from "../images/rog.jpg";
import nike from "../images/nike.jpg";





const cat=[
    { id: 1, photo: camaro, name: "transports" },
    { id: 2, photo: rog, name: "thecnology" },
    { id: 3, photo: nike, name: "clothes" },
    { id: 4, photo: glucometer, name: 'health' },
]

const Categories=()=>
{
  
  
    
    const numColumns=2
    const navigation = useNavigation(); 


    const handleHome = () => 
        {
  
        navigation.navigate('Home');  

    };


    return(

        <View style={styles.home}>

            

            <View style={styles.favorites}>
                <Pressable onPress={handleHome}>
                    <Image source={HomeImg}  style={styles.homeiconC}/>
                </Pressable>
                <Text style={styles.text} >Categories</Text>
            </View>
            <View>

            <View >
           
               
            <FlatList
                data={cat} 
                renderItem={({ item }) => <CategoryCard cat={item} />}
                keyExtractor={(item) => item.id.toString()}
                numColumns={numColumns}
                
            />
            </View>
               
            </View>



        </View>


    );

};
export default Categories