import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: JSON.parse(localStorage.getItem("Productes")) || [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const myProduct = {
        id: action.payload.id,
        title: action.payload.title,
        desc: action.payload.desc,
        price: action.payload.price,
        img:action.payload.img
      };
      state.products.unshift(myProduct);
      localStorage.setItem("Productes", JSON.stringify(state.products));
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      localStorage.setItem("Productes", JSON.stringify(state.products));
    },
  },
});

export const { addToCart, removeFromCart } = productSlice.actions;
export default productSlice.reducer;
