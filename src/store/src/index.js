import store from "./store/config";
import { addPost } from "./store/post";

const unsubscribe = store.subscribe(() => {
   console.log(store.getState(), " <= updated state")
})

store.dispatch(addPost({ id: 0, author: "Kevin Carter", text: "This is a new post the lastest news on the music industry" }));

console.log(store.getState());