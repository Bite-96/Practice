import React from "react";
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