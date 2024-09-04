import React from 'react';
import { View, Text, StyleSheet, Image, Pressable,FlatList } from 'react-native';
import styles from '../src/styles/GlobalStyles';
import { Searchbar, Button, IconButton} from 'react-native-paper';
import ProductCard from "./ProductCard"
import HomeImg from "../src/images/HomeImg.png";
import supermoto from "../src/images/supermoto.jpg";
import glucometer from "../src/images/glucometer.jpg";
import camaro from "../src/images/camaro.jpg";
import rog from "../src/images/rog.jpg";
import fan from "../src/images/fan.jpg";
import nike from "../src/images/nike.jpg";
import avion from "../src/images/avion.jpg";
import boat from "../src/images/boat.jpg";
import punchingball from "../src/images/punchingball.jpg";
import { useNavigation } from '@react-navigation/native';
import Categories from './Categories';
import Offers from './Offers';

const product=[

    {
        id:1,
        photo:nike,
        name: "Nike 8",
        price: 350000,
        

    },

    {
        id:2,
        photo: camaro,
        name: "Chevrolet Camaro",
        price: 180000000

    },
    
    {
        id:3,
        photo:rog,
        name: "ASUS ROG Strix Gaming GeForce RTX 4080",
        price: 8599900

    },
    {
        id:4,
        photo:glucometer,
        name:'Glucometer',
        price: 70000


    },
    {
        id:5,
        photo: fan,
        name:'Fan',
        price: 70000
    },
    {
        id:6,
        photo:supermoto,
        name:'Husqvarna 701',
        price: 55000000
    },
    {
        id:7,
        photo:avion,
        name:'Biplano Boeing-Stearman Modelo 75',
        price: 1200000000
    },
    {
        id:8,
        photo: punchingball,
        name: "Punching Ball",
        price:150000
    },
    {
        id:9,
        photo:boat,
        name:"boat",
        price:250000000
    }
   

];


const Home = () => {
    const [searchProduct, setSearchProduct] = React.useState('');
    const [active, setActive] = React.useState('');
    const navigation = useNavigation(); 

    const openDrawer = () => {
        navigation.openDrawer(); 
      };


    const handleCategories = () => 
        {
  
        navigation.navigate('Categories');  

    };
    const handleOffers = () => 
        {
  
        navigation.navigate('Offers');  

    };



    
    
       
    return (
        
        <View style={styles.home}>
           

            <View style={styles.head}>
                <Pressable onPress={openDrawer} style={styles.homeiconH}>
                    <Image source={HomeImg}  />
                </Pressable>
            
         
            <Searchbar 
                placeholder="Search Product"
                onChangeText={setSearchProduct}
                value={searchProduct}
                icon="magnify"
                style={styles.search}
            />
            </View>
            <View style={styles.homebuttons}>
                <Button  mode="outlined" onPress={handleCategories} style={styles.buttonRoutes} textColor='black'>
                    Categories
                </Button>
                <Button  mode="outlined" onPress={handleOffers} style={styles.buttonRoutes} textColor='black'>
                    Offers
                </Button>
                
            </View>

           
               
                <FlatList

                   data={product}
                   renderItem={({item})=> <ProductCard product={item}/>}
                    keyExtractor={(item)=> item.id.toString()}
                    
          />
          
          

        </View>
       
    );
}

export default Home;
