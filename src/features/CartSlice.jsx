import { createSlice } from "@reduxjs/toolkit";

const formatPrice = (price) => {
    return parseFloat(price).toFixed(2); // Format to two decimal places
};

const getTotalPrice = (cartItems)=>{
    const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    return formatPrice(totalPrice);
}
const generateTax =(amount)=>{
    const taxRate = 0.08; 
    return formatPrice(amount * taxRate);
}

const CartSlice = createSlice({
    name: "cartSlice",
    initialState: {
        cartItems: [],
        amount: 0,
        savings: 0,
        storePickup: 99,
        tax: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const { item, quantity } = action.payload;
            const itemPrice = parseFloat(item.price);
            const totalPrice = formatPrice(itemPrice * quantity);
            
            const existingItem = state.cartItems.find(i => i.id === item.id);
            if (!existingItem) {
                state.cartItems.push({ ...item, quantity, totalPrice });
            }

            state.amount = getTotalPrice(state.cartItems);
            state.tax = generateTax(state.amount)

        },
        removeFromCart: (state, action) => {
            const { id } = action.payload;
            const existingItemIndex = state.cartItems.findIndex(i => i.id === id);
            if (existingItemIndex >= 0) {
                const removedItem = state.cartItems[existingItemIndex];
                state.cartItems.splice(existingItemIndex, 1);

                state.amount = getTotalPrice(state.cartItems);
                state.tax = generateTax(state.amount)
            }
        },
        updateCartQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const existingItemIndex = state.cartItems.findIndex(i => i.id === id);

            if (existingItemIndex >= 0) {
                const updatedItem = state.cartItems[existingItemIndex];              
                updatedItem.quantity = quantity;             
                updatedItem.totalPrice = formatPrice(updatedItem.price * quantity);
                state.amount = getTotalPrice(state.cartItems);
                state.tax = generateTax(state.amount)


            }
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.amount = 0;
        }
    }        
});

export const { addToCart, removeFromCart, updateCartQuantity, clearCart } = CartSlice.actions;

export default CartSlice.reducer;  
