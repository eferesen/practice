/* The reducer has 2 arguments

  1) State Object
  2) Action
  Action has a prop called `type` and `payload`

*/
const TodoReducer = (state, action) => {
  switch (action.type) {
    case 'add': {
      // Take the existing state and return a new item
      return [
        ...state,
        {
          id: Date.now(),
          task: '',
          completed: false,
        },
      ];
    }

    case 'task' : {
      // Map over state 
      // update the particular task
      // and return the rest of the array un modified
      return state.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            task: action.payload.task
          }
        }
        return item
      })
    }

    case 'completed': {
      // Map over state 
      // update the task completed
      // and return the rest of the array un modified
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      });
    }

    case 'reset': {
      return action.payload;
    }

    case 'delete': {
      return state.filter((item) => item.id !== action.payload);
    }

    default: {
      return state;
    }
  }
};
export default TodoReducer;
