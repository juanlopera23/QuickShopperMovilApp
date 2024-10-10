import React,{useContext, useEffect, useReducer, useState} from "react";
import {View, Text, Pressable, Image, FlatList} from "react-native";
import styles from "../styles/GlobalStyles";
import HomeImg from "../images/HomeImg.png";
import { useNavigation } from '@react-navigation/native';
import { CartContext } from "../context/cartContext";
import ProductCard from "../Component/ProductCard"

import supermoto from "../images/supermoto.jpg";
import glucometer from "../images/glucometer.jpg";
import camaro from "../images/camaro.jpg";
import rog from "../images/rog.jpg";
import fan from "../images/fan.jpg";
import nike from "../images/nike.jpg";
import avion from "../images/avion.jpg";
import boat from "../images/boat.jpg";
import punchingball from "../images/punchingball.jpg";

const product = [
    { id: 1, photo: nike, name: "Nike 8", price: 350000, type:"clothes" },
    { id: 2, photo: camaro, name: "Chevrolet Camaro", price: 180000000, type:"transports" },
    { id: 3, photo: rog, name: "ROG RTX 4080", price: 8599900, type:"thecnology" },
    { id: 4, photo: glucometer, name: 'Glucometer', price: 70000, type: 'health'  },
    { id: 5, photo: fan, name: 'Fan', price: 70000, type: 'health'  },
    { id: 6, photo: supermoto, name: 'Husqvarna 701', price: 55000000, type:"transports" },
    { id: 7, photo: avion, name: 'Boeing-Stearman 75', price: 1200000000,type:"transports" },
    { id: 8, photo: punchingball, name: "Punching Ball", price: 150000, type:'health'  },
    { id: 9, photo: boat, name: "Boat", price: 250000000, type:"transports" },
];


const Categories=({route})=>
{
        
    const{cat}=route.params
    const[filteredCategory,setFilteredCategory]=useState([])

    useEffect(()=>
    {
        const filtered= product.filter((product)=>product.type===cat.name)
        setFilteredCategory(filtered)



    },[cat])

    
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
                <Text style={styles.text} >{cat.name}</Text>
            </View>
            <View>

            <View >
           
               
            <FlatList
                data={filteredCategory} 
                renderItem={({ item }) => <ProductCard product={item} />}
                keyExtractor={(item) => item.id.toString()}
                numColumns={numColumns}
                
            />
            </View>
               
            </View>



        </View>


    );

};
export default Categories