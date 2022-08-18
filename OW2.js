const Dday = document.querySelector("#D-day");

function DdayCalc(){
    const ow2Open = new Date("2022-10-05");
    const today = new Date();
    
    const diff = ow2Open - today;
    const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;
    
    
    if (diffDay == 0) {
        Dday.innerText = `D - Day`;
    }else{
        Dday.innerText = `D - ${diffDay}`;
    }
}

DdayCalc();
setInterval(DdayCalc, 1000);