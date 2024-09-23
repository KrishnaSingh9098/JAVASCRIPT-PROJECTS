const monthName = document.getElementById("month-name");

const dayName = document.getElementById("day-name");
const dayNum = document.getElementById("day-number");
const year1 = document.getElementById("year");
const timeDisplay = document.getElementById("newTime");

const date = new Date() ;
const month = date.getMonth();
monthName.innerText = date.toLocaleString("en",{
    month : "long"
})


dayName.innerText = date.toLocaleString("en" , {
    weekday : "long"
})

dayNum.innerText = date.getDate()

year1.innerText = date.getFullYear()
// timeDisplay.innerText = date.toLocaleTimeString();


function updteTiem () {
    const date = new Date();
    timeDisplay.innerText = date.toLocaleTimeString();   
}

updteTiem();

setInterval(updteTiem,1000)





