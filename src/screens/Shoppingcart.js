import { useContext } from 'react';
import {View, Text, Pressable, Image, FlatList} from 'react-native';
import styles from "../styles/GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import HomeImg from "../images/HomeImg.png";
import ShoppingCard from "../Component/ShoppingCard";
import { CartContext } from '../context/cartContext';



const ShoppingCart=()=>
    {
     
    const { state, dispatch } = useContext(CartContext);
   
    

    
    const navigation=useNavigation();
    
    

    const handleHome=()=>
    {
        navigation.navigate('Home')

    }
    const handlePaymentbranch=()=>
    {
        navigation.navigate('PaymentBranch')
    }

    return(


        <View style={styles.home}>

            <View style={styles.head}>
                <Pressable onPress={handleHome}>
                    <Image source={HomeImg}  style={styles.homeiconH }/>
                </Pressable>
                <Text style={styles.textShopping}>Shopping Cart</Text>
            </View>
            <View >
                {
                state.Cart.lentgh===0 ?(
                    <Text style={styles.textCart}>There are no products in your cart.</Text>
                 ) :(

                   <FlatList

                       data={state.Cart}
                       renderItem={({item})=> <ShoppingCard product={item}/>}
                       keyExtractor={(item)=> item.id.toString()}
 
                    />
                    )
                }
            
            </View>
            <View style={styles.viewCart}>
            <Pressable
            
            onPress={handlePaymentbranch}
            style={({ pressed }) => [
                {
                    backgroundColor: pressed ? '#26C6DA' : '#FFC107',
                },
                styles.buttonCart
            ]}
        >
            {({ pressed }) => (
                <Text style={styles.buttonText}>
                    {pressed ? 'Pressed!' : 'Payment Branch'}
                </Text>
            )}
        </Pressable>
            </View>
            
        </View>
    );

}

export default ShoppingCart;