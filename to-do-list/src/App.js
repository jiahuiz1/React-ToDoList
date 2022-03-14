import React from 'react'
import {useState} from 'react';
import './App.css';


function ChangeList(props){
  const [content, setContent] = useState(props.item.content);
  const [input, setInput] = useState(content);
  const [edit, setEdit] = useState(false);
  const handleEdit = () => {
    setEdit(true);
  }

  const handleCancel = () => {
    setEdit(false);
  }

  const handleSave = () => {
    setContent(input);
    setEdit(false);
  }

  
  return(
    <li className="ToDo">
      {!edit ? <span>{content}</span> : <input defaultValue={content} onChange={(e) => {setInput(e.target.value)}}></input>}
      {!edit ? <button onClick={handleEdit}>edit</button> : <><button onClick={handleCancel}>cancel</button> <button onClick={handleSave}>save</button></>}
      <button onClick={() => {props.handleDelete(props.index)}}>delete</button>
    </li>
  )
}

function App() {
  const [list, setList] = useState([]);
  const [inputValue, setInput] = useState({});

  const handleAdd = () => {
    setList([...list, inputValue]);
    setInput({...inputValue, content: ""});
  }

  const handleInput = (e) => {
    const data = {
      content: e.target.value,
      delete: false
    }
    setInput(inputValue => ({
      ...inputValue,
      ...data
    }))
  }

  // use splice() of array for to do list item delete
  const handleDelete = (index) => {
    let temp = [...list];
    const removed = temp.splice(index, 1);
    console.log(removed);
    // note: array.splice(index, howmany), index-position to add/remove items, howmany-number of items to be removed
    // splice() will overwrite the original array
    setList(temp);
  }


  return (
    <div className="ToDoList">
      <header>
        <h1>To do list</h1>
      </header>
      <div className="form">
        <input value={inputValue.content} onChange={handleInput}></input>
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul>
        {list.length>0 && list.map((item, index) => (
          <ChangeList key={index} item={item} handleDelete={handleDelete} index={index}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
