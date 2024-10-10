import React, {useState, useEffect} from "react";
import {View, Text, Pressable, Image} from "react-native";
import styles from "../styles/GlobalStyles";
import HomeImg from "../images/HomeImg.png";
import { useNavigation } from '@react-navigation/native';

import supermoto from "../images/supermoto.jpg";
import glucometer from "../images/glucometer.jpg";
import camaro from "../images/camaro.jpg";
import rog from "../images/rog.jpg";
import fan from "../images/fan.jpg";
import nike from "../images/nike.jpg";
import avion from "../images/avion.jpg";
import boat from "../images/boat.jpg";
import punchingball from "../images/punchingball.jpg";
import { FlatList } from "react-native-gesture-handler";
import ProductCard from "../Component/ProductCard"


const product = [
    { id: 1, photo: nike, name: "Nike 8", price: 350000, type:"clothes", label:"offer" },
    { id: 2, photo: camaro, name: "Chevrolet Camaro", price: 180000000, type:"transports", label:"no offer" },
    { id: 3, photo: rog, name: "ROG RTX 4080", price: 8599900, type:"thecnology", label:"offer" },
    { id: 4, photo: glucometer, name: 'Glucometer', price: 70000, type: 'health', label: "no offer"  },
    { id: 5, photo: fan, name: 'Fan', price: 70000, type: 'health', label:"offer"  },
    { id: 6, photo: supermoto, name: 'Husqvarna 701', price: 55000000, type:"transports", label: "no offer" },
    { id: 7, photo: avion, name: 'Boeing-Stearman 75', price: 1200000000,type:"transports", label:"offer" },
    { id: 8, photo: punchingball, name: "Punching Ball", price: 150000, type:'health', label:"no offer"  },
    { id: 9, photo: boat, name: "Boat", price: 250000000, type:"transports", label:"offer" },
];



const Offers=()=>
{
    numColumns=2
    const[offer,setOffer]=useState([])

    useEffect(()=>
    {
        const filtered=product.filter((product)=>product.label=== "offer")
        setOffer(filtered)

    },[])
    const navigation = useNavigation(); 


    const handlehome = () => 
        {
  
        navigation.navigate('Home');  

    };


    return(

        <View style={styles.home}>

            

            <View style={styles.favorites}>
                <Pressable onPress={handlehome}>
                    <Image source={HomeImg}  style={styles.homeiconO}/>
                </Pressable>
                <Text style={styles.text} >Offers</Text>
            </View>

            <View>
                <FlatList
                    data={offer} 
                    renderItem={({ item }) => <ProductCard product={item} />}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={numColumns}
                
                />
            </View>


        </View>


    );

};
export default Offers;