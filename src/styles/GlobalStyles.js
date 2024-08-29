import { StyleSheet } from "react-native";
import bottom from "../Component/BottomN";

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
        width:300,
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
        height:50,
        margin:20
    },
    bottom:
    {
        

    }


    


});

export default styles;