import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name: "cart",
    initialState: { cartItems: [] },
    reducers: {
        addToCart: (state:any, action) => {
            state.cartItems = [...state.cartItems, action.payload];
            
            
        },
        removeFromCart: (state:any, action) => {
            state.cartItems = state.cartItems.filter((item:any) => item.id !== action.payload.id);
        },
        clearCart: (state:any) => {
            state.cartItems = [];
        },
    },
})

export const {addToCart,removeFromCart,clearCart} = cartSlice.actions;
export default cartSlice.reducer;

export const selectCart = (state:any) => state.cart;