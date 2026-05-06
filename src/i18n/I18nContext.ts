import { createContext } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const I18nContext = createContext({ language: "en", changeLanguage: (_lng: string) => {} });
