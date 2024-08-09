import React from "react";

export default function Title({ locked }) {
  return (
    <>
      <h1 className="title">{locked ? "Reached Limit" : "Counter App"} </h1>
    </>
  );
}
