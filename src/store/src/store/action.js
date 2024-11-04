export const addPost = (text, author) => {
   return { 
      type: "ADD_POST", 
      payload: { 
         text: text, 
         author: author 
      } 
   }
}

export const removePost = (id) => {
   return {
      type: "REMOVE_POST",
      payload: { id: id }
   }
}

export const markAsFreePost = (id) => {
   return {
      type: "FREE_POST",
      payload: { id: id, free: true }
   }
}