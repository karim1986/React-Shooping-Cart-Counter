import React, { useState } from "react";
import Counters from "./components/Counters";
import "./App.css";
import Navbar from "./components/Navbar";

const App = () => {
  const [counters, setCounters] = useState([
    { id: 1, value: 4 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]);

  console.log(setCounters);

  //handleent
  const handleIncrement = (counter) => {
    const newCounters = [...counters];
    const index = counters.indexOf(counter);
    newCounters[index] = { ...counter };
    newCounters[index].value++;

    setCounters(newCounters);
  };

  //handle dec
  const handleDecrement = (counter) => {
    const newCounters = [...counters];
    const index = counters.indexOf(counter);
    newCounters[index] = { ...counter };
    newCounters[index].value--;
    setCounters(newCounters);
  };

  const handleDelete = (counterId) => {
    const countersDeleted = counters.filter(
      (counter) => counter.id !== counterId
    );
    setCounters(countersDeleted);
  };

  const handleReset = () => {
    const countersReset = counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    setCounters(countersReset);
  };

  return (
    <div>
      <Navbar counters={counters} />
      <main className="container">
        <Counters
          counters={counters}
          handleDelete={handleDelete}
          handleReset={handleReset}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      </main>
    </div>
  );
};

export default App;
