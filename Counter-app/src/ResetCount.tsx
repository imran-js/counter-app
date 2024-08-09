import { ResetIcon } from "@radix-ui/react-icons";
import React from "react";

function ResetCount({ setCount }) {
  return (
    <div className="reset-btn">
      <ResetIcon
        onClick={() => {
          setCount(0);
        }}
        className="reset-btn-icon"
      />
    </div>
  );
}

export default ResetCount;
