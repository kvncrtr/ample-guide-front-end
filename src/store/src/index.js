import store from "./store/config";
import { addPost, removePost, markAsFreePost, fetchPost } from "./store/post";

const unsubscribe = store.subscribe(() => {
   console.log(store.getState(), " <= updated state")
})

store.dispatch(fetchPost());
store.dispatch(markAsFreePost({ id: 1, free: true }));

console.log(store.getState());