import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Frontpage from "./Frontpage";
import Failure from "./Failure";
import Redirect from "./Redirect";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<Frontpage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
