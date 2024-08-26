import { createSlice } from "@reduxjs/toolkit";
import { products } from "../utils/constants/general";

const productSlice = createSlice({
  name: "fruits",
  initialState: {
    products,
    isOpenCart: false,
    cartProduct: [],
  },
  reducers: {
    openCart: (state) => {
      state.isOpenCart = true;
    },
    closeCart: (state) => {
      state.isOpenCart = false;
    },
    addProduct: (state, action) => {
      const newProduct = state.products.find(
        (item) => item.id === action.payload
      );

      if (newProduct) {
        newProduct.isBought = true;
        newProduct.quantyti = 1;
        state.cartProduct.push(newProduct);
      }
    },
    increment: (state, action) => {
      const product = state.cartProduct.find(
        (item) => item.id === action.payload
      );
      if (product) {
        product.quantyti = product.quantyti + 1;
      }
    },
    decrement: (state, action) => {
      const product = state.cartProduct.find(
        (item) => item.id === action.payload
      );
      if (product) {
        if (product.quantyti > 1) {
          product.quantyti -= 1;
        } else {
          state.cartProduct = state.cartProduct.filter(
            (item) => item.id !== action.payload
          );
          const originProduct = state.products.find(
            (item) => item.id === action.payload
          );
          if (originProduct) {
            originProduct.isBought = false;
          }
        }
      }
    },
  },
});

export const { openCart, closeCart, addProduct, increment, decrement } =
  productSlice.actions;
export const productReducer = productSlice.reducer;
