// Sum.js
import { useState, useCallback } from "react";
import Counter from "./Counter";

function Sum() {
  const [showMessage, setShowMessage] = useState(false);
  const [count, setCount] = useState(0);

  const toggleMessage = useCallback(() => {
    setShowMessage((prevState) => !prevState);
  }, []);

  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1
        className={`text-2xl font-bold mb-4 ${
          showMessage ? "text-green-500" : "text-red-500"
        }`}
      >
        {showMessage ? "Show Message" : "Hide Message"}
      </h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={toggleMessage}
      >
        Change the Message
      </button>
      <Counter count={count} onIncrement={incrementCount} />
    </div>
  );
}

export default Sum;
