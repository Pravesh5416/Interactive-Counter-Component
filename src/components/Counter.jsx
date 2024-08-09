import React from "react";

export default function Counter() {
  const [count, setCount] = React.useState(0);

  function inc() {
    setCount(prevCount => prevCount + 1);
    console.log(count); // This logs the count before the update
  }

  function dec() {
    setCount(prevCount => prevCount - 1);
    console.log(count); // This logs the count before the update
  }

  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-indigo-400 to-pink-500 h-screen w-screen">
      <div className="bg-white rounded-3xl w-[300px] h-[300px] text-center flex flex-col gap-6 justify-center p-10 shadow-lg">
        <h2 className="font-semibold text-3xl">Count : {count}</h2>
        <div className="flex gap-4 justify-center">
          <button
            onClick={inc}
            className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            ++
          </button>
          <button
            onClick={dec}
            className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-700"
          >
            --
          </button>
        </div>
      </div>
    </div>
  );
}
