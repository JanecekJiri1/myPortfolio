import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { Suspense } from "react/cjs/react.production.min";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)

  .init({
    supportedLngs: ["en", "cs"],
    fallbackLng: "en",
    detection: { order: ["path", "cookie", "htmlTag", "localStorage", "subdomain"], caches: ["cookie"] },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
  });

ReactDOM.render(
  <Suspense fallback>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>,
  document.getElementById("root")
);
