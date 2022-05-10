import './App.css';
import DropDown from './components/Dropdown';

const items = [
  { id: 1, name: 'Alex Popov' },
  { id: 2, name: 'Mac Terrior' },
  { id: 3, name: 'Primos Roglic' },
  { id: 4, name: 'Tadeh Pogacar' },
  { id: 5, name: 'Alexander Great' },
  { id: 6, name: 'Alexjandro Viquel' },
];

function App() {
  return (
    <div>
      <DropDown items={items}></DropDown>
    </div>
  );
}

export default App;
