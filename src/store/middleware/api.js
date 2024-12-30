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
         baseURL: "http://localhost:8080",
         url,
         method,
         data,
         params: action.payload.params,
      });

      dispatch({ type: onSuccess, payload: response.data });      
   } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      dispatch({ type: onError, payload: { message: `Error: ${errorMessage}` } })
   }
};

export default api;