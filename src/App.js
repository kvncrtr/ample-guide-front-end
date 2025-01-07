import React from "react";
import store from "./store/config.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import PublicLayoutPage from "./pages/PublicLayoutPage.jsx";

import HomePage from "./pages/HomePage.jsx";
import BlogDetails from "./pages/BlogDetailsPage.jsx";

const router = createBrowserRouter([
   {
      path: "/", 
      element: <PublicLayoutPage />,
      children: [
         {path: "/", element: <HomePage />},
         {path: "/post/:id", element: <BlogDetails />}
      ]
   },
   
]);

const App = () => {
   return (
      <Provider store={store}>
         <RouterProvider router={router} />
      </Provider>
   );
};

export default App;