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
      retrieveLatestPosts: (state, action) => {
         
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
   retrieveLatestPosts,
   onInit, 
   onFail,
   showError
} = postSlice.actions;

export default postSlice.reducer;
 
// Action Creators
const latestPostsUrl = "/api/latest-posts";

export const getLastestPost = () => apiCallBegin({
   latestPostsUrl,
   onInit: onInit.type,
   onSuccess: retrieveLatestPosts.type,
   onError: showError.type
});