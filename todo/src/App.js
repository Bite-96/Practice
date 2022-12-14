import React, { useState,useEffect } from "react";
import ToDo from "./components/ToDo/ToDo";
import DateView from "./components/DateView/DateView";
import Error from "./components/ErrorView/Error";
import ToDoList from "./components/List/ToDoList";

function App() {

  const [item,setItem] = useState("");
  const [list,setList] = useState([]);
  const [error, setError] = useState(false);
  const [modify, setModify] = useState("");
  const [modiError , setModiError] = useState(false);

  const TODONAME = "to-do";

  useEffect(() => {
    const localItem = localStorage.getItem(TODONAME);

    if(localItem !== null){
      const getItem = JSON.parse(localItem);
      const getList = getItem.map((list)=>(list.modify === true) ? {...list, modify: false} : list )

      setList(getList);
    }
  },[])

  useEffect(() => {
    localStorage.setItem(TODONAME, JSON.stringify(list))
  },[list])

  const onChange = (event) => {
    setItem(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if(item!==""){
      const newItem = {
        id : Date.now(), //고유값 아이디
        value : item, //내용
        check : false, //체크박스 체크
        modify : false, //수정 상태 
      };
      setList((list) => [newItem, ...list]);
    }else{
      setError(true);
      setTimeout(()=>{ setError(false) }, 1000);
    }
    setItem("");
  }

  const itemDel = (id) => {
    setList(list.filter( (item) => item.id !== id ));
  }

  const checkChange = (id) => {
    setList(list.map( (list) => (list.id === id) ? {...list, check: !list.check} : list));
  }
  
  const onModify = (id , value) => {
    setList(
      list.map( (list) =>  (list.id === id) ? {...list , modify : true  } : {...list, modify : false} )
    );
    setModify(value);
    setModiError(false);
  }

  const onModifyChange = (event) => {
    setModify(event.target.value);
  }

  const onModifySubmit = (event) => {
    event.preventDefault();
    if(modify!==""){
      setList(
        list.map((list) => (list.modify === true) ? {...list, value :modify ,modify:false } : list)
      );
    }else{
      setModiError(true);
      setTimeout(()=>{ setModiError(false) }, 1000);
    }
  }

  return (
    <div>
      <div>
        <DateView />
        <ToDo onSubmit={onSubmit} item={item} onChange={onChange}/>
        <Error text="🚫 아이템을 입력하세요..." error={error}/>
        <ToDoList 
            list={list} 
            modify={modify} 
            onModifyChange={onModifyChange} 
            onModify = {onModify}
            modiError = {modiError}
            checkChange = {checkChange}
            onModifySubmit = {onModifySubmit}
            itemDel = {itemDel}
          />
      </div>

    </div>
  );
}

export default App;
