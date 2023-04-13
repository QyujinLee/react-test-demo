import { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div className="page_wrap">
      <h3 data-testid="counter">{counter}</h3>
    </div>
  );
}
