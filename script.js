const months_name = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days_name = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function timeFunction() {

    dateObj = new Date()

    let hr = dateObj.getHours();
    let min = dateObj.getMinutes();
    let sec = dateObj.getSeconds();

    if (hr < 12) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;

    document.getElementById("main_hour").textContent = hr;
    document.getElementById("main_minute").textContent = min;
    document.getElementById("seconds").textContent = sec;

    if (hr >= 22 || hr <= 6) document.getElementById("pro_time").style.display = 'block';

    return hr + ':' + min;

}

function dateFunction() {

    dateObj = new Date()

    let day = dateObj.getDay();
    let month = dateObj.getMonth();
    let date = dateObj.getDate();
    let year = dateObj.getFullYear();

    document.getElementById("main_day").textContent = days_name[day];
    document.getElementById("main_month").textContent = months_name[month];
    document.getElementById("main_date").textContent = date;
    document.getElementById("main_yr").textContent = year;

}

// Just an aesthetic : no real function
function setRegion() {
    document.getElementById("city_name").textContent = "your";
    document.getElementById("country_name").textContent = "country";
}

function internationTimings() {
    
    let time_var = document.querySelectorAll(".time");

    console.log()

    for(let i=0; i<time_var.length; i++) {
        time_var[i].textContent = luxon.DateTime.now().setZone(time_var[i].id).toFormat("HH:mm");
    }

}

document.querySelector("title").textContent = 'Time.are | ' + timeFunction();

//console.log(getLocation())
setRegion();
dateFunction();
setInterval(timeFunction, 10);
setInterval(internationTimings, 10);
