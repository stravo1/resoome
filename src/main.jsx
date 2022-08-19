import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.less";
import { Provider } from "react-redux";
import store from "./store/store";
import { CustomProvider } from "rsuite";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomProvider theme="light">
      <Provider store={store}>
        <App />
      </Provider>
    </CustomProvider>
  </React.StrictMode>
);
