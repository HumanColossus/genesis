import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Frontpage from "./Frontpage";
import Failure from "./Failure";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<Frontpage />} />
          <Route path="failure" element={<Failure />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
