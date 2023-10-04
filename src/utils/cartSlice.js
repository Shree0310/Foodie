import { createSlice } from "@reduxjs/toolkit";

 const cartSlice = createSlice({
    name: 'cart',
    //How wilol be the cart initially, having an empty object/items array
    initialState: { 
        items : []
    },
    //here we will have the reducer function & actions
    //Reducer function corresponding to each action
    reducers: {
        //addItem is the action , and the function is reducer function
        //reducer function gets access to action and state
        //And the reducer function with the help of these will modify the state with the help of action
        addItem: (state, action) =>{
            //mutating the state
            //REdux uses immer js behind the scenes
            state.items.push(action.payload);
        },
        removeItem: (state, action) =>{
            state.items.pop();
        },
        clearCart: (state, action) =>{
            state.items.length = 0;
        },
    },
 }) 

 //Exporting the actions
 export const {addItem, removeItem, clearCart} = cartSlice.actions;

 //Exporting the reducers
 export default cartSlice.reducer;