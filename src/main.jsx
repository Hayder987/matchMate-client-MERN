import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./Router/router.jsx";
import { RouterProvider } from "react-router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n.js";
import AuthProvider from "./Context/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <I18nextProvider i18n={i18n}>
        <RouterProvider router={router}></RouterProvider>
      </I18nextProvider>
    </AuthProvider>
  </StrictMode>
);
