import React from 'react';

function ToDo({onSubmit , item , onChange  }){

    return (
        <form onSubmit={onSubmit}>
        <input 
          type = "text" 
          placeholder = "Add item..." 
          value = {item}
          onChange = {onChange}
        />
      </form>
    );
}

export default ToDo;