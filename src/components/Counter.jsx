import { useState } from "react";

import useStore from "../MyStore";

function Counter(props) {
  const count = useStore((state) => state.count);

  return (
    <>
      <h5>
        Count is: <span className="text-primary">{count}</span>
      </h5>
    </>
  );
}

export default Counter;
