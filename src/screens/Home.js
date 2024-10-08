import React, { useState,useEffect } from 'react';
import { View, Image, Pressable,FlatList } from 'react-native';
import styles from '../styles/GlobalStyles';
import { Searchbar, Button, IconButton} from 'react-native-paper';
import ProductCard from "../Component/ProductCard"
import HomeImg from "../images/HomeImg.png";
import lupa from "../images/lupa.png";
import cart from "../images/cart.png";
import borrar from "../images/borrar.png"
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


const product = [
    { id: 1, photo: nike, name: "Nike 8", price: 350000 },
    { id: 2, photo: camaro, name: "Chevrolet Camaro", price: 180000000 },
    { id: 3, photo: rog, name: "ROG RTX 4080", price: 8599900 },
    { id: 4, photo: glucometer, name: 'Glucometer', price: 70000 },
    { id: 5, photo: fan, name: 'Fan', price: 70000 },
    { id: 6, photo: supermoto, name: 'Husqvarna 701', price: 55000000 },
    { id: 7, photo: avion, name: 'Boeing-Stearman 75', price: 1200000000 },
    { id: 8, photo: punchingball, name: "Punching Ball", price: 150000 },
    { id: 9, photo: boat, name: "Boat", price: 250000000 },
];


const Home = () => {
    const [searchProduct, setSearchProduct] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(product);
    const numColumns = 2;

    useEffect(()=>
    {
        if(searchProduct === '')setFilteredProducts(product);

    },

    [searchProduct]

    );

    const handleSearch = () => {
        const filtered = product.filter(item =>
            item.name.toLowerCase().includes(searchProduct.toLowerCase())
        );
        setFilteredProducts(filtered); 
        console.log('Products filtered'); 
       
    };
    
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
    const handleShoppingCart=()=>
    {
        navigation.navigate('ShoppingCart')
    }

   
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
                    style={styles.search}
                    onIconPress={handleSearch} 
                    icon={lupa }
                    clearIcon={borrar}
                />
                <Pressable onPress={handleShoppingCart} style={styles.homeiconH}>
                    <Image source={cart}  />
                 </Pressable>

            </View>
            <View style={styles.homebuttons}>
                <Button  mode="outlined" onPress={handleCategories} style={styles.buttonRoutes} textColor='black'>
                    Categories
                </Button>
                <Button  mode="outlined" onPress={handleOffers} style={styles.buttonRoutes} textColor='black'>
                    Offers
                </Button>
                
            </View >

            <View style={styles.flatlist}>
           
               
            <FlatList
                data={filteredProducts} 
                renderItem={({ item }) => <ProductCard product={item} />}
                keyExtractor={(item) => item.id.toString()}
                numColumns={numColumns}
                
            />
            </View>
          
          

        </View>
       
    );
}

export default Home;