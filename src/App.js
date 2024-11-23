import React from "react";
import store from "./store/config.js";
import StoreContext from "./context/storeContext.js";
import HomePage from "./pages/HomePage.jsx";

const App = () => {
   return (
      <StoreContext.Provider value={store}>
         <div>
            <HomePage />
         </div>
      </StoreContext.Provider>
   );
};

export default App;