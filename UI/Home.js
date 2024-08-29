import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import styles from '../src/styles/GlobalStyles';
import { Searchbar, BottomNavigation} from 'react-native-paper';
import iconLogin from '../src/images/iconLogin.png';

import { NavigationContainer } from '@react-navigation/native';
import { Drawer } from 'react-native-paper';







const Home = () => {
    const [searchProduct, setSearchProduct] = React.useState('');
    const [active, setActive] = React.useState('');

    
    
       
    return (
        
        <View style={styles.home}>
           

            <View style={styles.head}>
            
           
            <Image source={iconLogin}  style={styles.Logo2}/>
            <Searchbar 
                placeholder="Search Product"
                onChangeText={setSearchProduct}
                value={searchProduct}
                icon="magnify"
                style={styles.search}
            />
            </View>
          

        </View>
       
    );
}

export default Home;
