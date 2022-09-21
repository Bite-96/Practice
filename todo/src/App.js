import DateView from './component/DateView';
import ToDo from './component/ToDo';
import ToDoList from './component/ToDoList';
import React, { useState, useEffect } from "react";

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  
  const TODONAME = "to-do";

  useEffect(() => {
    localStorage.setItem(TODONAME, JSON.stringify(list))
  },[list])

  const onSubmit = (event) => {
    event.preventDefault();
    if (item === "") {
      return;
    }
    setList((list) => [...list, item]);
    setItem("");
  }
  const onChange = (event) => {
    setItem(event.target.value);
  }
  return (
    <div>
      <div>
        <DateView />
        <ToDo />
        <ToDoList onSubmit={onSubmit} onChange={onChange}/>
      </div>
    </div>
  );
}

export default App;
