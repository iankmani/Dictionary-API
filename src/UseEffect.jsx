import { useEffect, useState } from "react";

const UseEffect = () => {
  const [number, setNumber] = useState(1);

  useEffect(() => {
    console.log(`component rendere is ${number}`);
  }, [number]);
  const handleIncrease = () => {
    setNumber(number + 1);
  };
  return (
    <div>
      <h1>UseEffect</h1>
      <p>{number}</p>
      <button onClick={handleIncrease}>increase</button>
    </div>
  );
};

export default UseEffect;
