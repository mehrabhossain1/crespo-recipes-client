import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import Container from "./pages/Shared/Container/Container";
import AuthProvider from "./providers/AuthProvider";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Container>
        <RouterProvider router={router} />
        <Toaster />
      </Container>
    </AuthProvider>
  </React.StrictMode>
);
