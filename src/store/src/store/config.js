import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./post";
import log from "../middleware/log";

const store = configureStore({ 
   reducer: {
      post: postReducer
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(log)
});

export default store;