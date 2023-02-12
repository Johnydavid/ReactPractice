import react, { useState } from "react";

export default function States() {
  const [value1, setValue1] = useState(0);
  const[name1, setName1] = useState("sun");

  const counting = () => {
    setValue1(value1 + 1);
  };

  const nameChange = ()=>{
    setName1("moon" );
    console.log(setName1);

  }

  return (
    <div>
      <h1> Hello World</h1>
      You clicked this button {value1} times
      <br />
      <button onClick={counting}> Add </button> <br />


      <h1>{name1}</h1> <br />
      <h2> Length of {name1} is {name1.length} </h2>
      <h3>{name1.toUpperCase()}</h3>
      <h3>{name1.toLowerCase()}</h3>
      <button onClick={nameChange}> Change Name</button>

      
    </div>


  );
}
