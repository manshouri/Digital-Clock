window.addEventListener('load',calculateTime);
function calculateTime(){
    let date = new Date(); //create a new date object with the current date and time
    let dayNumber =date.getDay(); //get the days in terms of numbers with sunday considered to be zero
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second =date.getSeconds();
    let ampm = hour >= 12 ? "PM" : "AM"; //consider AM and PM
    let dayNames = ["SUN","MON","TUE","WED","THUR","FRI","SAT"];
    minute = minute < 10? '0' + minute : minute; //add a leading zero on the value of minutes in case it is less than zero
    second = second < 10 ? '0'+ second: second; //add a leading zero '0' on the displayed seconds in case the seconds are less than zero
    // hour = hour % 12;
    document.getElementById("day").innerHTML =dayNames[dayNumber];
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("second").innerHTML = second;
    document.getElementById("ampm").innerHTML =ampm;

    

    setTimeout(calculateTime,1000);

}
