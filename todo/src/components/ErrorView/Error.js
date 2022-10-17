
function Error({text , error}){
    

    return (
        error ? 
        <div > 
            {text}
        </div>
        : 
        null
    );
}

export default  Error;