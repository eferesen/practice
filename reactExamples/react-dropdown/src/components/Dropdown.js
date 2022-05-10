import { useState } from 'react';
const DropDown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState([]);
  const toggle = () => setIsOpen(!isOpen);
  const [inputValue, setInputValue] = useState("")

  const [selection, setSelection] = useState(null);


  const search = (event) => {
    const searchValue = event.target.value;
    setInputValue(searchValue)
    setResults([])
    if (searchValue.length > 3) {
      toggle();
      console.log(searchValue);
      
      const result = items.filter((item) =>
        String(item.name).toLowerCase().startsWith(searchValue.toLowerCase())
      ) || [{ id: 1, name: 'Blank :fire' }];

      setResults(result);
    }
  };

  const handleSelection = (item) => {
    console.log(item)
    setSelection(item.name)
  }

  const clearSearch = () => {
    setResults([]);
    setInputValue("")
    toggle();
    setSelection(null)
  };

  return (
    <div>
      <p>Select an Item</p>
      <input
        role="button"
        onChange={(event) => search(event)}
        onKeyPress={() => toggle()}
        value={inputValue}
      />
      <div onClick={clearSearch}>Clear</div>
      {isOpen ? (
        <div>
          <ul>
            {results.map((item) => (
              <li key={item.id} onClick={() => handleSelection(item)}>{item.name}</li>
            ))}
          </ul>
        </div>
      ) : null}
      <div>
        {selection ? (
          <span>You selected {selection}</span>
        ) : (
          <span>Nothing Selected yet</span>
        )}
      </div>
    </div>
  );
};

export default DropDown;
