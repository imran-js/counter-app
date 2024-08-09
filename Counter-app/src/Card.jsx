import React, { useEffect, useState } from "react";
import Count from "./Count";
import CounterButtons from "./CounterButtons";
import ResetCount from "./ResetCount";
import Title from "./Title";

export default function Card() {
  const [count, setCount] = useState(0);
  const locked = count === 5 ? true : false;
  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetCount setCount={setCount} />
      <CounterButtons setCount={setCount} locked={locked} />
    </div>
  );
}
