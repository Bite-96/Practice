import React from 'react';

function ToDo({onSubmit , item , onChange  }){

    return (
        <form onSubmit={onSubmit}>
        <input 
          type = "text" 
          placeholder = "할 일을 입력하세요..." 
          value = {item}
          onChange = {onChange}
        />
      </form>
    );
}

export default ToDo;