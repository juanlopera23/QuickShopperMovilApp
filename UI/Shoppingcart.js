import {View, Text, Pressable, Image, FlatList} from 'react-native';
import styles from "../src/styles/GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import HomeImg from "../src/images/HomeImg.png";
import ShoppingCard from "../src/Component/ShoppingCard"


const ShoppingCart=({route})=>
{
    const navigation=useNavigation();
    const {product}=route.params || {};
    
    const Shopping = product ? [product] : [];

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
            <View>
                {
                Shopping.length===0 ?(
                    <Text style={styles.textCart}>There are no products in your cart.</Text>
                 ) :(

                   <FlatList

                       data={Shopping}
                       renderItem={({item})=> <ShoppingCard product={item}/>}
                       keyExtractor={(item)=> item.id.toString()}
 
                    />
                    )
                }
            
            </View>
            <View>
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