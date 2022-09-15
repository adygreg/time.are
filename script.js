function timeFunction() {

    dateObj = new Date();
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

    const months_name = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days_name = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    dateObj = new Date();
    let day = dateObj.getDay();
    let month = dateObj.getMonth();
    let date = dateObj.getDate();
    let year = dateObj.getFullYear();

    document.getElementById("main_day").textContent = days_name[day];
    document.getElementById("main_month").textContent = months_name[month];
    document.getElementById("main_date").textContent = date;
    document.getElementById("main_yr").textContent = year;

}

function getLocation() {
    fetch('https://api.ipify.org/?format=json').then(res => res.json().then(result => {console.log(result.ip)}));
}

function setRegion() {

    document.getElementById("city_name").textContent = "your";
    document.getElementById("country_name").textContent = "country";
}

function internationTimings() {
    document.getElementById("lon_time").textContent = luxon.DateTime.now().setZone('Europe/London').toFormat("HH:mm");
    document.getElementById("par_time").textContent = luxon.DateTime.now().setZone('Europe/Paris').toFormat("HH:mm");
    document.getElementById("kyv_time").textContent = luxon.DateTime.now().setZone('Europe/Kyiv').toFormat("HH:mm");
    document.getElementById("del_time").textContent = luxon.DateTime.now().setZone('Asia/Calcutta').toFormat("HH:mm");
    document.getElementById("tky_time").textContent = luxon.DateTime.now().setZone('Asia/Tokyo').toFormat("HH:mm");
    document.getElementById("lax_time").textContent = luxon.DateTime.now().setZone('US/Pacific').toFormat("HH:mm");
    document.getElementById("nyc_time").textContent = luxon.DateTime.now().setZone('US/Eastern').toFormat("HH:mm");
}

document.querySelector("title").textContent = 'Time.are | ' + timeFunction();

//console.log(getLocation())
setRegion();
dateFunction();
setInterval(timeFunction, 10);
setInterval(internationTimings, 10);
