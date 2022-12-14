import Error from '../ErrorView/Error';

function ToDoItem({ item, modify , onModifySubmit, onModifyChange , onModify , modiError , checkChange , itemDel }){
    
    return (
        <>
           <li key={item.id} >
                <div >
                    {
                    item.modify ?
                        <>
                            <form onSubmit={onModifySubmit} >
                                <input type="text" 
                                    value={modify} 
                                    onChange={onModifyChange} 
                                    placeholder="please press enter..."
                                />
                            </form>
                            <Error text="π« ν  μΌμ μλ ₯ν΄μΈμ..." error={modiError}/>
                        </>
                    :
                        <span onClick={() => checkChange(item.id)}>{item.value}</span> 
                    }
                    <div >
                    {
                        item.modify ? 
                        <button onClick={onModifySubmit} >βοΈ</button>
                        :
                        <button onClick={()=> onModify(item.id , item.value)} >βοΈ</button>
                        }
                        <button onClick={() => itemDel(item.id)}>β</button>
                    </div>
                </div>
                
            </li>
        </>
    );
}

export default ToDoItem;