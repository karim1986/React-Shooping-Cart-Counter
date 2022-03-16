import React from "react";

function Navbar({ counters }) {
  const totalCounter = counters.filter((counter) => counter.value > 0).length;
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar{" "}
            <span className="badge badge-pill badge-secondary">
              {totalCounter}
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
