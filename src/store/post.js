import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegin } from "./api";
import axios from "../utils/http";

// State
const initialState = {
   latestPost: [{
         id: 0,
         issn: "",
         about: "",
         abstract: "",
         accessMode: "",
         accessModeSufficient: "",
         accountablePerson: "",
         aggregateRating: "",
         alternativeHeadline: "",
         audience: "",
         author: "",
         citation: "",
         comment: "",
         commentCount: 0,
         conditionsOfAccess: "",
         contentRating: "",
         contributor: "",
         copyrightHolder: "",
         copyrightNotice: "",
         copyrightYear: 2024,
         countryOfOrigin: "",
         creativeWorkStatus: "",
         creditText: "",
         dateCreated: "",
         dateModified: "",
         datePublished: "",
         discussionUrl: "",
         editor: "",
         educationLevel: "",
         educationalUse: "",
         encodingFormat: "",
         expires: "",
         funder: "",
         genre: "",
         hasPart: false,
         headline: "",
         inLanguage: "",
         interactionStatistic: "",
         isAccessibleForFree: true,
         isFamilyFriendly: true,
         isPartOf: "",
         keywords: "",
         license: "",
         locationCreated: "",
         mentions: "",
         offers: "",
         position: 0,
         publisher: "",
         schemaVersion: "1.0.0",
         size: 0.0,
         sponsor: "",
         teaches: "",
         text: "",
         thumbnail: {},
         thumbnailUrl: "",
         timeRequired: "",
         typicalAgeRange: "",
         version: "1.0.0",
         video: {},
         videoUrl: "",
         additionalType: "",
         description: "",
         name: "",
         potentialAction: "",
         url: "",
      }],
      isLoading: false,
      message: ""
}

// Slices
export const postSlice = createSlice({
   name: "post",
   initialState,
   reducers: {
      addPost: (state, action) => {
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
   addPost,
   onInit, 
   onFail,
   showError
} = postSlice.actions;

export default postSlice.reducer;

// Action Creators
const url = "/posts"

export const createPost = () => apiCallBegin({
   url,
   onInit: onInit.type,
   onSuccess: addPost.type,
   onError: onFail.type
});