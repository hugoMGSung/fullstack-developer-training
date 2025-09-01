import { useState } from "react";

export default function CounterBasic() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>현재 값: {count}</p>
      <button onClick={() => {
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
      }}>+2</button>
    </div>
  );
}
