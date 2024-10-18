// import react and react dom
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// get reference to root
const element = document.getElementById("root");

// tell react to take control of that element
const root = ReactDOM.createRoot(element);

// show the component on the screen 
root.render(<App />);
