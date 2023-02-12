import react, { useState } from "react";

export default function States() {
  const [value1, setValue1] = useState(0);

  const counting = () => {
    setValue1(value1 + 1);
  };

  return (
    <div>
      <h1> Hello World</h1>
      You clicked this button {value1} times
      <br />
      <button onClick={counting}> Add </button> <br />
    </div>
  );
}
