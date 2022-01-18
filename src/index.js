import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { Provider } from "./Context/context";

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
