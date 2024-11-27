import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    updateCart: (state, action) => {
      state.items = action.payload;
    },
     deleteItem: (state, action) => {
      state.items = state.items.filter(
        (item, id) => item.id !== action.payload
      );
    },
  },
});

export const { addToCart,updateCart,  deleteItem } = CartSlice.actions;
export default CartSlice.reducer;
