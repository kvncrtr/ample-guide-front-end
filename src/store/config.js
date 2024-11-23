import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./post";
import api from "./middleware/api";

const store = configureStore({ 
   reducer: {
      post: postReducer
   },
   middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware(),
      api
   ]
});

export default store;