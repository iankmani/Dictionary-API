import { useState } from "react";

const Events = () => {
  const [age, setAge] = useState(20);
  const [years, setYears] = useState(2024);
  const [loading, setLoading] = useState(false);

  const handleDecrease = (e) => {
    e.preventDefault();
    setAge(age + 1);
    if (age === 20) {
      alert("you are too old");
    }
    setYears(years + 1);

    if (loading === true) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  };

  return (
    <div>
      <p>
        Ruth is {age} years in {years}{" "}
      </p>
      <button onClick={handleDecrease}>Decrease</button>
      <p>{loading ? `Loading please wait ...` : `finally it is done`}</p>
    </div>
  );
};
export default Events;
