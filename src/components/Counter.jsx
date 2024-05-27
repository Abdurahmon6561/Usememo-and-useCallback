// Counter.js
import { memo } from "react";

const Counter = memo(({ count, onIncrement }) => {
  console.log("Counter component rendered");

  return (
    <div className="flex items-center space-x-4">
      <span className="font-bold text-lg">Count: {count}</span>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={onIncrement}
      >
        +
      </button>
    </div>
  );
});

export default Counter;
