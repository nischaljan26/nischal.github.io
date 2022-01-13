import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./redux/reducers";

axios.defaults.baseURL =
  "https://nischalstha9.pythonanywhere.com/api/portfolio/";

const store = createStore(
  allReducers
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
