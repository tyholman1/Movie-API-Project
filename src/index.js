import { StrictMode } from "react";
// import { createRoot } from "react-dom/client"
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);