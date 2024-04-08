import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./Router";
import { GlobalStyled } from "./components/GlobalStyle";
import { HelmetProvider } from "react-helmet-async";
import { CookiesProvider } from "react-cookie";
import "./fonts/fonts.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <CookiesProvider>
        <GlobalStyled />
        <Router />
      </CookiesProvider>
    </HelmetProvider>
  </React.StrictMode>
);
