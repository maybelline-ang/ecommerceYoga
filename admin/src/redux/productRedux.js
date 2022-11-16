import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    pending: false,
    error: false,
  },
  reducers: {
    // GET ALL PRODUCTS
    getProductInitial: (state) => {
      state.isFetching = true;
      state.error = false;
    },

    // * if fetching is successful, fetching is completed henceforth set to "false"
    getProductSuccess: (state, action) => {
      state.isFetching = false;
      // update product array with payload
      state.products = action.payload;
    },

    getProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    // DELETE PRODUCTS
    deleteProductInitial: (state) => {
      state.isFetching = true;
      state.error = false;
    },

    // * if fetching is successful, fetching is completed henceforth set to "false"
    deleteProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
    },

    deleteProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getProductInitial,
  getProductSuccess,
  getProductFailure,
  deleteProductInitial,
  deleteProductSuccess,
  deleteProductFailure,
} = productSlice.actions;

export default productSlice.reducer;
