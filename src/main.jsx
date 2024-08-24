import React from "react";
import ReactDOM from "react-dom/client"; // Update this import
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import Footer from "./Footer";
import Home from "./Home";

// Create a root element using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Home />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
