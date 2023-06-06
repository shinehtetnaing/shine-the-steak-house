import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { MenuProvider } from "./Context/MenuContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <MenuProvider>
        <App />
      </MenuProvider>
    </ChakraProvider>
  </React.StrictMode>
);
