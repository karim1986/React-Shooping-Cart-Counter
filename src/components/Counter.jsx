import React, { useState } from "react";

function Counter({ counter, handleDelete, handleIncrement, handleDecrement }) {
  const { id, value } = counter;

  //format count
  const formatCount = () => {
    return value === 0 ? "Zero" : value;
  };

  //rendering the class dynamically
  function getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += value === 0 ? "warning" : "primary";
    return classes;
  }

  return (
    <div className="row">
      <div className="col-1">
        <span className={getBadgeClasses()}>{formatCount()}</span>
      </div>
      <div className="col">
        <button
          onClick={() => handleIncrement(counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>
        <button
          onClick={() => handleDecrement(counter)}
          className={
            value === 0
              ? "btn btn-secondary btn-sm"
              : "btn btn-secondary btn-sm disabled"
          }
        >
          -
        </button>
        <button
          onClick={() => handleDelete(id)}
          className="btn btn-danger btn-sm m-2"
        >
          x
        </button>
      </div>
    </div>
  );
}

export default Counter;
