import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="max-w-7xl mx-auto h-screen bg-cyan-100">
      <div className=" flex flex-col gap-10 items-center justify-center rounded border border-gray-200 py-16">
        <h2 className="text-3xl font-bold">{counter}</h2>
        <div className="flex items-center gap-5">
          <button
            onClick={() => setCounter(counter + 1)}
            className="bg-orange-500 px-8 py-2 rounded cursor-pointer"
          >
            Increment
          </button>
          <button
            onClick={() => setCounter(counter - 1)}
            className="bg-orange-500 px-8 py-2 rounded cursor-pointer"
          >
            Decrement
          </button>
          <button
            onClick={() => setCounter(0)}
            className="bg-orange-500 px-8 py-2 rounded cursor-pointer"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
export default App;
