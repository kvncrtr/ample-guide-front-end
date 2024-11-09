import store from "./store/config";
import axios from "axios";
import { addPost, onPending } from "./store/post";

export const getPost = async () => {
   // call api
   store.dispatch(onPending());
   const response = await axios.get("https://jsonplaceholder.typicode.com/posts");

   // dispatch function 
   store.dispatch(addPost({ id: 2, author: "Koren Carter", text: response.data[1].body }));
};

getPost();