import React,{useContext, useEffect, useReducer, useState} from "react";
import {View, Text, Pressable, Image, FlatList} from "react-native";
import styles from "../styles/GlobalStyles";
import HomeImg from "../images/HomeImg.png";
import { useNavigation } from '@react-navigation/native';
import ProductCard from "../Component/ProductCard";
import firestore from '@react-native-firebase/firestore';




const Categories=({route})=>
{
        
    const{cat}=route.params
    const[filteredCategory,setFilteredCategory]=useState([])

    useEffect(()=>
    {
        const dataCat = firestore().collection('Products') .where('type', '==', cat.name) 
          .onSnapshot(querySnapshot => {
            const documents = [];
    
            console.log('Datos de Firestore recibidos');

            querySnapshot.forEach(documentSnapshot => {
              documents.push({
                ...documentSnapshot.data(),
                key: documentSnapshot.id, 
              });
            });
            console.log('Número de documentos:', querySnapshot.size);
    
            console.log(documents);
            
            setFilteredCategory(documents); 
          });
    

        return () => dataCat();
      
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
                keyExtractor={(item) => item.key}
                numColumns={numColumns}
                
            />
            </View>
               
            </View>



        </View>


    );

};
export default Categories