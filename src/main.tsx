import React from "react";
import ReactDOM from "react-dom/client";
import Provider from "./Provider.tsx";
import "./index.css";
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider />
    </React.StrictMode>
);
