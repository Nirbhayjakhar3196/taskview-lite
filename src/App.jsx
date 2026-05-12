import Navbar from "./components/Navbar";

// TODO:
// Import:
// BrowserRouter, Routes, Route from react-router-dom
// Home from ./pages/Home
// Tasks from ./pages/Tasks
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import React from "react";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      {/* TODO: Add Routes here */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
    </div>
  );
}

export default App;
