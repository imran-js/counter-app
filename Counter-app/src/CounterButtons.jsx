import React from "react";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CounterButtons({ setCount, locked }) {
  return (
    <div className="button-container">
      <Counter locked={locked} type="minus" setCount={setCount} />
      <Counter locked={locked} type="plus" setCount={setCount} />
    </div>
  );
}

function Counter({ setCount, type, locked }) {
  const HandleClick = () => {
    if (type === "minus") {
      setCount((prev) => (prev <= 0 ? 0 : prev - 1));
    } else {
      setCount((prev) => (prev >= 5 ? 5 : prev + 1));
    }
  };

  return (
    <button disabled={locked} onClick={HandleClick} className="count-btn">
      {type === "minus" && <MinusIcon className="count-btn-icon" />}
      {type === "plus" && <PlusIcon className="count-btn-icon" />}
    </button>
  );
}
