import { StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { black } from "react-native-paper/lib/typescript/styles/themes/v2/colors";



const styles=StyleSheet.create
({

    container:
    {
        flex:1,
        backgroundColor:'#03A9F4',
        justifyContent: 'center',

    },
    container2:
    {
        
        backgroundColor: '#424242',
        elevation: 89,
        justifyContent:'space-evenly',
        borderRadius: 25, 
        margin:20

    },
    home:
    {
       flex:1,
        backgroundColor: '#ccd2d9'

    },
    
    head:
    {
        backgroundColor: '#03A9F4',
        height:100,
        alignItems:'center',
       
        flexDirection:'row'
        
        

    },

    search:
    {
        width:270,
        height:50

    },

    buttonText:
    {
        color:'black',
        fontSize:16

    },

    button:
    {
        padding: 15,
        borderRadius: 25, 
        alignItems: 'center', 
        elevation: 4, 
        margin:6
    },
    
    label:
    {
        flex:0,
        margin :20

    },
    Logo1:
    {
        
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop:50,
        marginLeft:150

    },
    Logo2:
    {
        width: 50,
        height:47,
        margin:20
    },
    userText:
    {
        fontSize:30,
        color:'black',
        
    },
    buttonUser:
    {
        marginTop:590

    },
    TextInput:
    {
        margin:10,
        marginTop:15
        

    },
    sendP:
    {
        marginTop:100
    },
    textR:
    {
        fontSize:20,
        color:'black',
        

    },

    text:
    {
        fontSize:30,
        color:'black',
        
    },

    favorites:
    {
        backgroundColor: '#03A9F4',
        height:100,
        alignItems:'center',
       
        flexDirection:'row',
        justifyContent:'center'
        
        


    },
    homeiconC:
    {
        marginRight:87,
        marginLeft:-90
    },
    homeiconO:
    {
        marginRight:87,
        marginLeft:-140

    },
    buttonRoutes:
    {
        width: 160, 
        height: 40,
        margin:8,
        

    },
    homebuttons:
    {
        flexDirection:'row',
        justifyContent:'flex-end'
    },
   homeiconH :
    {
        margin:20
    },
    homeiconP :
    {
        marginLeft:-90,
        
        
    },
    card:
    {
      
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor:'#000',
        textShadowOffset:{width: 0, height:2},
        shadowOpacity:0.25,
        shadowRadius:3.84,
        elevation:5,
        margin:5,
        width:168,
        
       
        
    },
    photo:
    {
        width: 160, 
        height: 110,
        
    },
    photoDetails:
    {
        width: 270, 
        height: 200,
        marginLeft: 50,
        
    },
    ProductDetails:
    {
        
        margin:20

    },
    textProduct:
    {
        fontSize:25,
        color:'black',
        marginLeft: 60,
        margin:5,
    },
    textDetails:
    {
        fontSize:18,
        color:'black',
       
    },
    buttonDetails:
    {

        padding: 15,
        borderRadius: 25, 
        alignItems: 'center', 
        elevation: 4, 
        margin:10,
        marginTop:150

        
    },
    textShopping:
    {
        fontSize:30,
        color:'black',
        marginLeft:50
        
    },
    buttonCart:
    {
        padding: 15,
        borderRadius: 25, 
        alignItems: 'center', 
        elevation: 4, 
        margin:10,
        marginTop:530
    },
    textCart:
    {
        fontSize:20,
        color:'black',
        marginLeft:50,
        margin:30
    }

    



    
    


});

export default styles;