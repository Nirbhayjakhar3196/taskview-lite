// TODO: Replace <a> with Link from react-router-dom
import { Link } from "react-router-dom";
import React from "react";


function Navbar() {
  return (
    // TODO: Replace <a> with Link from react-router-dom
    <nav>
      <Link to="/">Home</Link>
      {" "}
      <Link to="/tasks">Tasks</Link>
    </nav>
  );
}

export default Navbar;
