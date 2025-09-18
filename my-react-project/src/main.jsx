import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DataProvider } from "./context/DataContext.jsx";
import { ProductProvider } from "./context/ProductContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
    <ProductProvider>
    <DataProvider>
      <CartProvider>
      <App />
      </CartProvider>
    </DataProvider>
    </ProductProvider>
    </AuthProvider>
  </StrictMode>
);
