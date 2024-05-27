import { useState, useMemo } from "react";

const Todos = () => {
  const [count, setCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const calculateFromNtoBillion = (n) => {
    let sum = 0;
    for (let i = 1; i <= 1000000; i++) {
      sum += i;
    }
    return n + sum;
  };

  const sum = useMemo(() => calculateFromNtoBillion(count), [count]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto my-8">
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
      >
        Increment Count
      </button>
      <button
        onClick={() => setShowMessage(!showMessage)}
        className="bg-green-500 text-white px-4 py-2 rounded ml-2 hover:bg-green-700 transition duration-200"
      >
        {showMessage ? "Hide Message" : "Show Message"}
      </button>
      <div className="mt-4">
        <div className="text-lg">Count: {count}</div>
        <div className="text-lg">Sum: {sum}</div>
        {showMessage && <div className="mt-2 text-red-500">Show Message</div>}
      </div>
    </div>
  );
};

export default Todos;
