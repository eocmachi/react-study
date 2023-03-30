import { useState } from "react";

export default function Counter({ total, onClick }) {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <span className="number">
        {count} <span className="total">/{total}</span>
      </span>
      <button
        onClick={() => {
          setCount(count + 1);
          onClick();
          //이렇게 할 수도 있구나..... 🙊
        }}
        className="button"
      >
        Add +
      </button>
    </div>
  );
}
