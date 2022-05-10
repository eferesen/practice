import './App.css';
import { useReducer } from 'react';
import TodoReducer from './utils/TodoReducer';
import TodoList from './components/TodoList.js';
import TodoContext from './TodoContext';

function App() {
  const [state, dispatch] = useReducer(TodoReducer, []);
  console.log(state)
  return (
    <div className="App">
      <h1>Todo List 🍭</h1>
      <h2>✏️ a task </h2>
      <TodoContext.Provider value={dispatch}>
        <button onClick={() => dispatch({ type: 'add' })}>Add a task</button>

        {state.length ? (
          <TodoList items={state} />
        ) : (
          <div>The Todo List is 🤷‍♂️</div>
        )}
      </TodoContext.Provider>

    </div>
  );
}

export default App;
