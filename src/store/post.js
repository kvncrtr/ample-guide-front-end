import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegin } from "./api";

// State
const initialState = {
   latestPosts: [],
   isLoading: false,
   message: ""
}

// Slices
export const postSlice = createSlice({
   name: "post",
   initialState,
   reducers: {
      retrieveLatestPosts: (state, action) => {
         state.isLoading = false;
         state.latestPosts = [action.payload[0]];         
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
         state.message = action.payload.message;
         console.log(action.payload.message);
      }
   }
});

export const {
   retrieveLatestPosts,
   onInit, 
   onFail,
   showError
} = postSlice.actions;

export default postSlice.reducer;
 
// Action Creators
const latestPostsUrl = "/api/latest-posts";

export const getLatestPosts = () => apiCallBegin({
   url: latestPostsUrl,
   onInit: onInit.type,
   onSuccess: retrieveLatestPosts.type,
   onError: showError.type
});