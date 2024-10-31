function reducer(state = [], action) {
   if (action.type === "ADD_POST") {
      return [
         ...state, 
         {
            id: 0,
            content: ""
         }
      ]
   }
}