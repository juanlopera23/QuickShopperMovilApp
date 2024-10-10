import React from "react";
import {View, Text, Pressable, Image, onPress} from 'react-native';
import styles from '../styles/GlobalStyles';
import { useNavigation } from '@react-navigation/native';



const CategoryCard =({cat})=>
{
    const navigation = useNavigation(); 


    const handleCategory = () => 
        {
  
        navigation.navigate('Category', { cat });  

    };
    


   

    return(
        <View style={styles.card}>
            
            <Pressable onPress={handleCategory} >
                <Image source={cat.photo} style={styles.photo} />
                <Text style={styles.textProduct}>{cat.name}</Text>
            </Pressable>
        </View>
    );
};
export default CategoryCard;