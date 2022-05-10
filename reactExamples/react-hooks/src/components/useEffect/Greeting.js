import { useEffect } from 'react';

const Greeting = ({ name }) => {
  useEffect(() => {
    document.title = name;
  }, [name]);

  return <div>Hello {name}</div>;
};

export default Greeting;
