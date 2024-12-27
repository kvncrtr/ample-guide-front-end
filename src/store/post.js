import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegin } from "./api";

// State
const initialState = {
   latestPost: [],
   isLoading: false,
   message: ""
}

// Slices
export const postSlice = createSlice({
   name: "post",
   initialState,
   reducers: {
      loadPost: (state, action) => {
         state.latestPost = action.payload;
      },
      onInit: (state, action) => {
         state.isLoading = true;
         state.message = "";
      },
      onFail: (state, action) => {
         state.isLoading = false;
         state.message = action.payload.message;
      },
      showError: (state, action) => {
         console.log(action.payload.message);
      }
   }
});

export const {
   loadPost,
   onInit, 
   onFail,
   showError
} = postSlice.actions;

export default postSlice.reducer;

// Action Creators
const url = "/api/posts"

export const getAllPost = () => apiCallBegin({
   url,
   onInit: onInit.type,
   onSuccess: loadPost.type,
   onError: onFail.type
});

export const getLastestPost = () => apiCallBegin({

})