import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({list, modify, onModify, onModifyChange, modiError, checkChange, onModifySubmit, itemDel}){
    return (
        <ul>
        {list.length !== 0 ? 
            list.map((item) => 
                <ToDoItem 
                    item = {item} 
                    key = {item.id}
                    modify = {modify}
                    onModifySubmit = {onModifySubmit} 
                    onModifyChange = {onModifyChange}
                    onModify = {onModify}
                    modiError = {modiError}
                    checkChange = {checkChange}
                    itemDel = {itemDel}
                />
            ).reverse()
            : 
            <li >등록된 할 일이 없습니다...</li>
          }
        </ul>
    );
}

export default React.memo(ToDoList);