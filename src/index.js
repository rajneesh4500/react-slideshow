import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App, { App2 } from "./App";
import * as serviceWorker from "./serviceWorker";

const MainApp = () => {
  const [navigate, setNavigate] = useState(false);
  return !navigate ? <App setNavigate={setNavigate} /> : <App2 />;
};

ReactDOM.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
