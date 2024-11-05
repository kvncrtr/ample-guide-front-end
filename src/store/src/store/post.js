import store from "./config";

// State
const initialState = [
   {
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
   }
]

// Action Types
const ADD_POST = "ADD_POST";
const REMOVE_POST = "REMOVE_POST";
const FREE_POST = "FREE_POST";

// Actions
export const addPost = (text, author) => {
   return {
      type: ADD_POST,
      payload: {
         text: text,
         author: author
      }
   }
}

export const removePost = (id) => {
   return {
      type: REMOVE_POST,
      payload: { id: id }
   }
}

export const markAsFreePost = (id) => {
   return {
      type: FREE_POST,
      payload: { id: id, free: true }
   }
}

export const fetchPost = () => async (dispatch) => {
   const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
   const newContent = await res.json();
   store.dispatch(addPost(newContent, "Kevin Carter"));
};

// Reducers
let id = 0;

function reducer(state = initialState, action) {
   if (action.type === ADD_POST) {
      return [
         ...state,
         {
            id: ++id,
            issn: "",
            about: "",
            abstract: "",
            accessMode: "",
            accessModeSufficient: "",
            accountablePerson: "",
            aggregateRating: "",
            alternativeHeadline: "",
            audience: "",
            author: action.payload.author,
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
            text: action.payload.text,
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
         },
      ]
   } else if (action.type === REMOVE_POST) {
      return state.filter(post => post.id !== action.payload.id)
   } else if (action.type === FREE_POST) {
      const newArr = [...state];
      newArr.find(post => {
         if (post.id === action.payload.id) {
            console.log(post);
         }
      })
   }

   return state;
}

export default reducer;