import React from "react";
import store from "./store/config.js";
import { Provider } from "react-redux";
import HomePage from "./pages/HomePage.jsx";

const App = () => {
   return (
      <Provider store={store}>
         <div>
            <HomePage />
         </div>
      </Provider>
   );
};

export default App;