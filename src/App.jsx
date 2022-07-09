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
          <Route
            path="article"
            element={<Redirect link="https://depue.notion.site/How-code-plagiarism-checking-works-and-how-to-beat-it-c7f64ef288b348c0ba352f654516d430" />}
          />
          <Route path="guide" element={<Redirect link="https://depue.notion.site/How-to-beat-MOSS-d2b6d3803c9f4bedbff26e1c9637b0dd" />} />
          <Route path="about_us" element={<Redirect link="https://depue.notion.site/About-Us-0c17b0f2ffea45b89be4af8bf5d99929" />} />
          <Route path="*" element={<Frontpage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
