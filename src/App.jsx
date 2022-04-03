import React from "react";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";
import "./css/app.css";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
};

export default App;
