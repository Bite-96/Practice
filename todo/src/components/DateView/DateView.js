import React from 'react'; 

function DateView(){

    const date = new Date();
    const dateArray = {
        year : date.getFullYear(),
        month : String(date.getMonth() + 1).padStart(2,"0"),
        day : String(date.getDate()).padStart(2,"0"),
        week : date.getDay()
    }

    const weekChangeText = [ "Sunday 🖖" ,"Monday 💪😀" ,"Tuesday 😜" ,"Wednesday 😌☕️" ,"Thursday 🤗" ,"Friday 🍻" ,"Saturday 😴" ]


    return (
        <div>
            <h4>
            {dateArray.year}. {dateArray.month}. {dateArray.day} 
            </h4>
            <h1>Have a nice {weekChangeText[dateArray.week]}</h1>
        </div>
    );
}

export default  DateView;