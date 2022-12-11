import { createSlice } from "@reduxjs/toolkit";
import Pdata from "../../components/Product/Pdata";

export const counterSlice = createSlice({
  name: "appData",
  initialState: {
    value: { data: Pdata, wishlist: [], cart: [], filterData: [] },
    filters: [
      {
        name: "Men",
        active: false,
      },
      {
        name: "Women",
        active: false,
      },
      {
        name: "Boys",
        active: false,
      },
      {
        name: "Girls",
        active: false,
      },
    ],
    categories: [
      {
        name: "Shirts",
        active: false,
      },
      {
        name: "Sleep Shirts",
        active: false,
      },
      {
        name: "Dog shirts",
        active: false,
      },
    ],
    brands: [
      {
        name: "Zara",
        active: false,
      },
      {
        name: "Parx",
        active: false,
      },
      {
        name: "Roadster",
        active: false,
      },
      {
        name: "Harvard",
        active: false,
      },
      {
        name: "Wrogn",
        active: false,
      },
    ],
    wishlist: [],
    cart: [],
  },
  reducers: {
    filter: (state, action) => {
      // console.log(action);
      // console.log(state.value);
      const { payload } = action;
      debugger;
      switch (payload.type) {
        case "filter":
          const filters = state.value.filterData.length===0 ? state.value.data.map((currData) => {
            //   console.log(currData);
            if (action.payload.value === currData.filter) {
              return { ...currData, visible: true };
            } else {
              return { ...currData, visible: false };
            }
          }):state.value.filterData.filter(currData => payload === currData.filter);
          console.log(filters);
          state.value.data = filters;
          break;
        case "category":
          // action.payload = ['zara','wrong'];
          const categories = state.value.filterData.length === 0 ?state.value.data.map((currData) => {
            // in this function we will find all the brands selected present in the data ad show them visible as true
            if (
              action.payload.value.find(
                (category) => category === currData.category
              )
            ) {
              return { ...currData, visible: true };
            } else {
              return { ...currData, visible: false };
            }
          }): state.value.filterData.filter(currData => payload === currData.category);
          console.log(categories);
          state.value.data = categories;
          break;
        case "brand":
          // action.payload = ['zara','wrong'];
          const brands = state.value.filterData.length === 0 ?state.value.data.map((currData) => {
            // in this function we will find all the brands selected present in the data ad show them visible as true
            if (
              action.payload.value.find((brand) => brand === currData.pname)
            ) {
              return { ...currData, visible: true };
            } else {
              return { ...currData, visible: false };
            }
          }): state.value.filterData.filter(currData => payload === currData.pname) ;
          console.log(brands);
          state.value.data = brands;
          break;

        default:
          break;
      }

      // action.payload will contain the value that should be used to filter the data.
    },
    addToWishlist: (state, action) => {
      // action.payload.id will be the product that should be added from state.value
      // state.wishlist = state.wishlist.push(action.payload)
      const abc = state.value.wishlist;
	  console.log(abc);
	  console.log([...abc,action.payload]);
      state.value.wishlist = [...abc,action.payload];
      // const wishlistedData = state.value.find(({id})=> id === action.payload )
      // console.log(wishlistedData);
      // let newData = state.value.wishlist;
      // newData.push(wishlistedData)
      // state.wishlist = newData;
    },
    removeFromWishList: (state, action) => {
      const wishlistedData = state.value.wishlist.filter(
        ({ id }) => id !== action.payload.id
      );
	  console.log(wishlistedData);
      state.value.wishlist = wishlistedData;

    },
    addToCart: (state, action) => {
      // action.payload.id will be the product that should be added from state.value
      // state.wishlist = state.wishlist.push(action.payload)
      const abc = state.value.cart;
      state.cart = abc.push(action.payload);
      // const wishlistedData = state.value.find(({id})=> id === action.payload )
      // console.log(wishlistedData);
      // let newData = state.value.wishlist;
      // newData.push(wishlistedData)
      // state.wishlist = newData;
    },
    removeFromCart: (state, action) => {
      const cartData = state.value.cart.filter(({ id }) => id !== action.payload.id);
      state.value.cart = cartData;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  incrementByAmount,
  filter,
  addToWishlist,
  removeFromWishList,
  addToCart,
  removeFromCart,
} = counterSlice.actions;

export default counterSlice.reducer;
