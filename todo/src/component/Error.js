function ErrorView({text , error}){
    

    return (
        error ? 
        <div> 
            {text}
        </div>
        : 
        null
    );
}

export default  ErrorView;