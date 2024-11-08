import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

// State
const postState = {
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
   initialState: postState,
   reducers: {
      addPost: (state, action) => {
         let newPost = Object.assign({}, state[0]);
   
         newPost.id += 1;
         newPost.author = action.payload.author;
         newPost.text = action.payload.text;
         state.post.latestPost.push(newPost);
      }
   }
});

export const {
   addPost
} = postSlice.actions;

export default postSlice.reducer;
