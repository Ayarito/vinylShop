import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { data } from "../utils/constants";

const initialState = {
  items: data,
  cart: [],
};

export const vinylSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    addItemToCart: (state, action) => {
      console.log(action)
      state.cart.push(action.payload)
    },
    deleteFromCart:(state, action) =>{
      console.log(action)
      const idToRemove = action.payload;
      const afterRemove = state.cart.filter(el => el.id !== idToRemove)
      state.cart = afterRemove
     

    }
  },
});

export const { setItems,addItemToCart, deleteFromCart } = vinylSlice.actions;
export default vinylSlice.reducer;
