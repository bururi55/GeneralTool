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
        <Route path="/S4SInstrument/" element={<LoginPage />} />
        <Route
          path="/S4SInstrument/mm"
          element={
            <PrivateRoute>
              <MMMainComponent />
            </PrivateRoute>
          }
        />
        <Route
          path="/S4SInstrument/smkt"
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
