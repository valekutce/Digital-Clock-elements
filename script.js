const time = document.getElementById("clock");
const date = document.getElementById("today");
const timeX = document.getElementById("xm");

setInterval(() => {

    let dt = new Date();

    let hour = dt.getHours();
    let minute = dt.getMinutes();
    let second = dt.getSeconds();

    let xm;

    let day = dt.getDate();
    let weekDayIndex = dt.getDay();
    let monthIndex = dt.getMonth();
    let year = dt.getFullYear();

    let weekDayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


    (hour >= 12) ? xm = 'PM': xm = 'AM';

    if (hour > 12) {
        hour -= 12;
    }

    if (hour == 0) {
        hour = 12;
    }

    if (hour < 10) {
        hour = '0' + hour;
    }

    if (minute < 10) {
        minute = '0' + minute;
    }

    if (second < 10) {
        second = '0' + second;
    }

    if (day < 10) {
        day = '0' + day;
    }

    time.innerHTML = hour + ' : ' + minute + ' : ' + second + ' ';
    timeX.innerHTML = xm;
    date.innerHTML = weekDayNames[weekDayIndex] + ', ' + monthNames[monthIndex] + ' ' + day + ', ' + year;

}, 1000);