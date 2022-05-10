import { useState, useEffect, useRef } from 'react';

const StopWatch = () => {
  const [count, setCount] = useState(0);
  const refId = useRef(0);

  const startTimer = () => {
    if (refId.current) return;
    refId.current = setInterval(() => {
      setCount(c => c + 1)
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(refId.current);
    refId.current = 0;
  };

  const cancelTimer = () => {
    clearInterval(refId.current)
    setCount(0)
  };

  useEffect(() =>{
    return () => clearInterval(refId.current)
  }, [refId])

  return (
    <div>
      <div>Count {count}</div>
      <button onClick={startTimer}>Start Timer 😄</button>
      <br />
      <button onClick={stopTimer}>Stop Timer 🥲</button>
      <br />
      <button onClick={cancelTimer}>Reset Timer ♻️</button>
    </div>
  );
};

export default StopWatch;
