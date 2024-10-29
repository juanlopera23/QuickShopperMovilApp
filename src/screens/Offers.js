import React, {useState, useEffect} from "react";
import {View, Text, Pressable, Image} from "react-native";
import styles from "../styles/GlobalStyles";
import HomeImg from "../images/HomeImg.png";
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import { FlatList } from "react-native-gesture-handler";
import OfferProduct from "../Component/OfferCard"




const Offers=()=>
{
    const[offer,setOffer]=useState([])
    const[filteredOffer, setFilteredOffer]=useState(offer)

    numColumns=2

    useEffect(() => {
        const dataOffer = firestore().collection('Products').where('offer', '==', true) 
          .onSnapshot(querySnapshot => {
            const documents = []
    
            console.log('Datos de Firestore recibidos')
            querySnapshot.forEach(doc => {
              documents.push({...doc.data(),key: doc.id,})
            });
            console.log('Número de documentos:', querySnapshot.size)
    
            console.log(documents)
            setOffer(documents)
            setFilteredOffer(documents)
          });
    
        return () => dataOffer()
      }, []);
    
    const navigation = useNavigation()


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

            <View style={styles.flatlist}>
                <FlatList
                    data={filteredOffer} 
                    renderItem={({ item }) => <OfferProduct product={item} />}
                    keyExtractor={(item) => item.key}
                    numColumns={numColumns}
                
                />
            </View>


        </View>


    );

};
export default Offers;