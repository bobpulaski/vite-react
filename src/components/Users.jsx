import React, { useEffect, useState } from "react";

import "./CounterButton";
import CounterButton from "./CounterButton";
import Counter from "./Counter";

function Users() {
  const [userData, setUserData] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((json) => setUserData(json));
  }, []);

  return (
    <>
      <h1>{userData.name}</h1>
      <Counter />
      <CounterButton title="Click Me To Count Up" />
    </>
  );
}

export default Users;
