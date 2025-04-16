import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import MMMainComponent from "./components/MM/MMMainComponent";
import SMKTMainComponent from "./components/SMKT/SMKTMainComponent";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/GeneralTool/" element={<LoginPage />} />
        <Route
          path="/GeneralTool/mm"
          element={
            <PrivateRoute>
              <MMMainComponent />
            </PrivateRoute>
          }
        />
        <Route
          path="/GeneralTool/smkt"
          element={
            <PrivateRoute>
              <SMKTMainComponent />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
