import React from 'react'
import {useState} from 'react';
import './App.css';


function changeList(content){
  return(
    <li>
      <span>{content}</span>
      <button>edit</button>
      <button>delete</button>
    </li>
  )
}

function App() {
  const [list, setList] = useState([]);
  const [inputValue, setInput] = useState(0);
  console.log(inputValue);

  const addItem = () => {
    setInput(inputValue+1);
  }

  return (
    <div className="ToDoList">
      <header>
        <h1>To do list</h1>
      </header>
        <form>
          {/* <input onChange={(e) => setInput(e.target.value)}></input> */}
          <button onClick={addItem}>Add</button>
        </form>
        <p>{inputValue}</p>
    </div>
  );
}

export default App;
