import axios from "axios";
import { apiCallBegin } from "../api";

const api = ({ dispatch }) => (next) => async (action) => {
   if (action.type !== apiCallBegin.type) {
      return next(action);
   } 

   const { 
      url, 
      method, 
      data, 
      onInit, 
      onSuccess, 
      onError } = action.payload;
   
      dispatch({ type: onInit, payload: { message: "Reaching out to server. Just a moment..." }});
   try {
      const response = await axios.request({
         baseURL: "https://jsonplaceholder.typicode.com",
         url,
         method,
         data
      });

      dispatch({ type: onSuccess, payload: response.data });      
   } catch (error) {
      dispatch({ type: onError, payload: { error: error.message } })
   }
};

export default api;