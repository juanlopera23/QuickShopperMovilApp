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
import firestore from '@react-native-firebase/firestore';



const Home = () => {
    const[data, setData] = useState([]);
    const [searchProduct, setSearchProduct] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(data);
    const numColumns = 2;


    useEffect(() => {
        
        const dataBase = firestore().collection('Products') .onSnapshot(querySnapshot => {
            const documents = [];
    
            console.log('Datos de Firestore recibidos')

            querySnapshot.forEach(documentSnapshot => {
              documents.push({
                ...documentSnapshot.data(),key: documentSnapshot.id, 
              });
            });
            console.log('Número de documentos:', querySnapshot.size)
    
            console.log(documents)
            setData(documents)
            setFilteredProducts(documents)
          });
    

        return () => dataBase();
      }, []);

      useEffect(() => {
        if (searchProduct === '') {
            setFilteredProducts(data); 
        } 
    }, [searchProduct, data]);

    const handleSearch = () => {
        const filtered = data.filter(item =>
            item.name.toLowerCase().includes(searchProduct.toLowerCase())
        )
        setFilteredProducts(filtered)
        console.log('Products filtered')
       
    };
    
    const navigation = useNavigation(); 

    const openDrawer = () => {
        navigation.openDrawer() 
      };


    const handleCategories = () => 
        {
  
        navigation.navigate('Categories')  

    };
    const handleOffers = () => 
        {
  
        navigation.navigate('Offers')  

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
                keyExtractor={(item) => item.key}
                numColumns={numColumns}
                
            />
            </View>
          
          

        </View>
       
    );
}

export default Home;