import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  addproductsarr: [],
};

export const productslice = createSlice({
  name: "Add_Product_Slice",
  initialState,
  reducers: {
    addProductsvalues: (state, action) => {
      const {
        inputProductTitle,
        inputProductDescription,
        imageuploadify,
        inputPrice,
        inputCompareatprice,
        inputCostPerPrice,
        inputStarPoints,
        inputProductTags,
        inputProductType,
        inputCollection,
        inputVendor,
      } = action.payload; // Destructure payload

      const values = {
        id: nanoid(),
        inputProductTitle,
        inputProductDescription,
        imageuploadify,
        inputPrice,
        inputCompareatprice,
        inputCostPerPrice,
        inputStarPoints,
        inputProductTags,
        inputProductType,
        inputCollection,
        inputVendor,
      };
      state.addproductsarr.push(values);
    },
  },
});

export const { addProductsvalues } = productslice.actions;

export default productslice.reducer;
