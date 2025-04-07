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
        addItem: (state, action) => {
            // Check if item already exists in cart
            const existingItemIndex = state.items.findIndex(
                item => item.id === action.payload.id
            );
            
            if (existingItemIndex >= 0) {
                // Item exists, increment quantity
                state.items[existingItemIndex].quantity += 1;
            } else {
                // New item, add with quantity 1
                state.items.push({...action.payload, quantity: 1});
            }
        },
        removeItem: (state, action) => {
            const existingItemIndex = state.items.findIndex(
                item => item.id === action.payload
            );
            
            if (existingItemIndex >= 0) {
                if (state.items[existingItemIndex].quantity > 1) {
                    // Decrement quantity if more than 1
                    state.items[existingItemIndex].quantity -= 1;
                } else {
                    // Remove item if quantity is 1
                    state.items = state.items.filter(item => item.id !== action.payload);
                }
            }
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
}) 

//Exporting the actions
export const {addItem, removeItem, clearCart} = cartSlice.actions;

//Exporting the reducers
export default cartSlice.reducer;