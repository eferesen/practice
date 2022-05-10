import { useEffect, useRef } from 'react';

const Interval = ({ name }) => {

  useEffect(() => {
    const id = setInterval(() => {
      console.log(`it is an interval ${name}`);
    }, 4000);

    return () => {
      clearInterval(id);
    };
  }, [name]);

  return <div>Interval {name}</div>;
};

export default Interval;
