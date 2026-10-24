import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ApiProvider from "./context/ApiContext.jsx";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { UserProvider } from "./context/userContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApiProvider>
      <UserProvider>
        <CartProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CartProvider>
      </UserProvider>
    </ApiProvider>
  </StrictMode>,
);
