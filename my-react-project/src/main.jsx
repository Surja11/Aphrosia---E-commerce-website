import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DataProvider } from "./context/DataContext.jsx";
import { ProductProvider } from "./context/ProductContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import {ToastContainer} from "react-toastify"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ProductProvider>
        <DataProvider>
          <CartProvider>
            <App />
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              
            />
          </CartProvider>
        </DataProvider>
      </ProductProvider>
    </AuthProvider>
  </StrictMode>
);
