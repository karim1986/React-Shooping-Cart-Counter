import React, { useState } from "react";
import Counter from "./Counter";
function Counters({
  counters,
  handleDelete,
  handleReset,
  handleIncrement,
  handleDecrement,
}) {
  return (
    <div>
      <button onClick={handleReset} className="btn tbn-primary btn-sm m-2">
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          counter={counter}
          key={counter.id}
          handleDelete={handleDelete}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      ))}
    </div>
  );
}

export default Counters;
