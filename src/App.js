import React from "react";
import store from "./store/config.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import HomePage from "./pages/HomePage.jsx";
import BlogDetails from "./pages/BlogDetailsPage.jsx";

const App = () => {
   return (
      <Provider store={store}>
         <Router>
            <div>
               <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/post/:id" element={<BlogDetails />} />
               </Routes>
            </div>
         </Router>
      </Provider>
   );
};

export default App;