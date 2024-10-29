import React, { Children, createContext, useReducer } from "react";
import {Alert} from "react-native"

const initialState=
{
    favorite:[],
   
}

const showAlert = () => {
    Alert.alert(
      "QuickShopper", 
      "already exists in favorites.", 
    )
}

const showAlert2 = () => {
    Alert.alert(
      "QuickShopper", 
      "add to favorites.", 
    )
}

const reducer=(state,action)=>
{
    switch(action.type)
    {
        case "ADD":
         

            if(state.favorite.some((item) => item.key === action.payload.key))
            {
                showAlert();
                
                 return state;
                

            }
            else{
                
                showAlert2();
                return{...state,favorite:[...state.favorite,action.payload]};
                

            }
        case "DELETE":
            return{
                ...state,favorite: state.favorite.filter(favorite=> favorite.key !== action.payload.key)
            }
        
        
        default:
            return state


    }
}

export const FavoriteContext=createContext()
export const FavoriteProvider=({children})=>
{
    const[state,dispatch]=useReducer(reducer,initialState)

    return(
        <FavoriteContext.Provider value={{state,dispatch}}>
            {children}
        </FavoriteContext.Provider>
    );
}

