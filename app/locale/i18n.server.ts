import { FetchBackend, RemixI18Next } from "remix-i18next";

const baseURL = (() => {
  if (process.env.SERVER_URL) {
    return process.env.SERVER_URL;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  throw new Error("SERVER_URL or VERCEL_URL environment variable must be set.");
})();

// You will need to provide a backend to load your translations, here we use the
// file system one and tell it where to find the translations.
let backend = new FetchBackend({
  baseUrl: new URL(baseURL),
  pathPattern: "/locales/:locale/:namespace.json",
});

export let i18n = new RemixI18Next(backend, {
  fallbackLng: "en", // here configure your default (fallback) language
  supportedLanguages: ["es", "en"], // here configure your supported languages
});
