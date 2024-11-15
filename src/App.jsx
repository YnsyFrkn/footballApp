import React from "react";
import Header from "./components/Header";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RouterConfig from "./config/RouterConfig";
function App() {
  return (
    <div>
      <Header />
      <RouterConfig />

      <ToastContainer autoClose={2500} style={{ fontSize: "13px" }} />
    </div>
  );
}

export default App;
