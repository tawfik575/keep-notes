import "./styles.css";
import React from "react";
import App from "./components/App";
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector("#root"));
root.render(<App />);