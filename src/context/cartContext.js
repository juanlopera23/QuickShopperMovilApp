import React, { Children, createContext, useReducer } from "react";
import {Alert} from "react-native"

const initialState=
{
    Cart:[],
   
}

const showAlert = () => {
    Alert.alert(
      "SHOPPING CART", 
      "already exists in the shopping cart.", 
    )
}

const showAlert2=()=>{

    Alert.alert(
      "QuickShopper", 
      "add to cart.", 
    )

}

const reducer=(state,action)=>
{
    switch(action.type)
    {
        case "ADD":
         

            if(state.Cart.some((item) => item.key === action.payload.key))
            {
                showAlert();
                
                 return state;
                

            }
            else{

                showAlert2();
                
                return{...state,Cart:[...state.Cart,action.payload]};
            }
        case "DELETE":
            return {
                ...state,
                Cart: state.Cart.filter((item) => item.key !== action.payload.key),
            };
        case "INCREASE":
            return {
                ...state,cart: state.cart.map((item) =>item.id === action.payload.id? { ...item, cantidad: item.cantidad + 1 }
                    : item
                ),
              };
        case "DECREASE":
            return {
                ...state,cart: state.cart.map((item) =>item.id === action.payload.id && item.cantidad > 0
                ? { ...item, cantidad: item.cantidad - 1 }
                    : item
                ),
              };
        
        default:
            return state


    }
}

export const CartContext=createContext()
export const CartProvider=({children})=>
{
    const[state,dispatch]=useReducer(reducer,initialState)

    return(
        <CartContext.Provider value={{state,dispatch}}>
            {children}
        </CartContext.Provider>
    );
}

