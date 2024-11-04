import store from "./store/config";
import { addPost, removePost, markAsFreePost } from "./store/post";

const unsubscribe = store.subscribe(() => {
   console.log(store.getState(), " <= updated state")
})

store.dispatch(addPost("how is this a new post", "Kevin Carter"));
store.dispatch(addPost("how is this is a second new post", "Kevin Carter"));
console.log(store.getState());

unsubscribe();

store.dispatch(removePost(1));
store.dispatch(markAsFreePost({ id: 1, free: true }));
console.log(store.getState());