import {BrowserRouter as Router} from 'react-router-dom';
import React from "react";
import ReactDOM from "react-dom/client";
import "../src/index.css";
import reportWebVitals from "./reportWebVitals";
import HomeRoute from './routers/HomeRoute';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <HomeRoute/>
  </Router>
);

reportWebVitals();