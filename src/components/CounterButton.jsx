import React from "react";
import useStore from "../MyStore";

function CounterButton(props) {
  const increaseCount = useStore((state) => state.increaseCount);

  function handleClick() {
    increaseCount();
  }

  return (
    <>
      <button className="btn btn-success" onClick={handleClick}>
        {props.title}
      </button>
    </>
  );
}

export default CounterButton;
