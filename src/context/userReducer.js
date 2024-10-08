import React,{useReducer}  from "react";



export const initialStates={
    
    users:[],
    isLoggedIn: false,
}
const showAlert = () => {
    Alert.alert(
      "QUICKSHOPPER", 
      "the user already exists .", 
    )
}

const showAlertLogin = () => {
    Alert.alert(
      "QUICKSHOPPER", 
      "the user doesn't exists .", 
    )
}

export const reducer=(state,action)=>
{
    switch(action.type)
    {
        case "ADD_USER":
           
            
            if(state.users.some((item) => item.id === action.payload.id)) 
            {
                showAlert();
                
                return state;
            }
            else{
                return{...state,users:[...state.users,action.payload]};
                
            }

        case "LOGIN":
                
            const user = state.users.find(
                (item) => item.email === action.payload.email && item.password === action.payload.password
            );
                
            if (user) 
                {
                   return { ...state, isLoggedIn: true }; 
                }
            else 
                {
                    showAlertLogin(); 
                    return state; 
                }
    
        default:
            return state

           
    }

}


export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialStates);

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
};