import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Counter } from "./components/Counter";
import Bottom from "./components/Bottom";
import Timer from "./components/Timer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <Provider store={store}>
      {/* <App /> */}
      <Counter />
      <Bottom />
      <Timer />
    </Provider>
 
);
