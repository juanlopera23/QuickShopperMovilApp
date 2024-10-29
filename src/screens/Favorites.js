import React,{useContext} from "react";
import {View, Text, Pressable, Image} from "react-native";
import styles from "../styles/GlobalStyles";
import HomeImg from "../images/HomeImg.png"
import { useNavigation } from '@react-navigation/native';
import { FavoriteContext } from "../context/favoriteContext";
import { FlatList } from "react-native-gesture-handler";
import FavoriteCard from "../Component/FavoriteCard";

const Favorites=()=>
{
    const{state}=useContext(FavoriteContext);
    const navigation = useNavigation(); 
    const openDrawer = () => {
        navigation.openDrawer(); 
      };

      numColumns = 2


    return(

        <View style={styles.home}>
            
            

            <View style={styles.favorites}>
                <Pressable onPress={openDrawer}>
                    <Image source={HomeImg}  style={styles.homeiconC}/>
                </Pressable>
            
                
                <Text style={styles.text} >Favorites</Text>
            </View>
            <View>
                <FlatList
                    data={state.favorite}
                    renderItem={({ item }) => <FavoriteCard product={item} />}
                    keyExtractor={(item) => item.key}
                    numColumns={numColumns}

                />
            </View>


        </View>


    );

};
export default Favorites;