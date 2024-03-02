window.addEventListener('load',calculateTime);
function calculateTime(){
    let date = new Date();
    let dayNumber =date.getDay();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second =date.getSeconds();
    let ampm = hour >= 12 ? "PM" : "AM"; //consider AM and PM
    let dayNames = ["SUN","MON","TUE","WED","THUR","FRI","SAT"];
    // hour = hour % 12;
    document.getElementById("day").innerHTML =dayNames[dayNumber];
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("second").innerHTML = second;
    document.getElementById("ampm").innerHTML =ampm;

    setTimeout(calculateTime,1000);

}