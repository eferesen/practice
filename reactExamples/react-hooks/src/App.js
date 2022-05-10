import './App.css';
import { useState } from 'react';
import Greeting from './components/useEffect/Greeting';
import Interval from './components/useEffect/Interval';
import StopWatch from './components/useRef/StopWatch';

function App() {
  const [name, setName] = useState('Adam');
  const [intervalTest, setIntervalTest] = useState('Zapata');

  const update = (e) =>  {
    setIntervalTest(e.target.value)
  }
  return (
    <div className="App">
      {/* <Greeting name={name} />
      <button onClick={() => setName(Math.ceil(Math.random() * 100))}>
        {' '}
        UpDate Name{' '}
      </button> */}
      <br />
      {/* <Interval name={intervalTest}/>
      <input value={intervalTest} type='text' onChange={(e) => update(e)} /> */}
      <br />
      <StopWatch />
    </div>
  );
}

export default App;
