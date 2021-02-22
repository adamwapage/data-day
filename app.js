const month = new Date().getMonth();
const day = new Date().getDay();
const date = new Date().getDate();
const year = new Date().getFullYear();

let monthName;

switch (month) {
  case 0:
    monthName = 'January';
    break;
  case 1:
    monthName = 'February';
    break;
  case 2:
    monthName = 'March';
    break;
  case 3:
    monthName = 'April';
    break;
  case 4:
    monthName = 'May';
    break;
  case 5:
    monthName = 'June';
    break;
  case 6:
    monthName = 'July';
    break;
  case 7:
    monthName = 'August';
    break;
  case 8:
    monthName = 'September';
    break;
  case 9:
    monthName = 'October';
    break;
  case 10:
    monthName = 'November';
    break;
  case 11:
    monthName = 'December';
}

let dayName;

switch (day) {
  case 0:
    dayName = 'Sunday';
    break;
  case 1:
    dayName = 'Monday';
    break;
  case 2:
    dayName = 'Tuesday';
    break;
  case 3:
    dayName = 'Wednesday';
    break;
  case 4:
    dayName = 'Thursday';
    break;
  case 5:
    dayName = 'Friday';
    break;
  case 6:
    dayName = 'Saturday';
    break;
}

document.getElementById('month').innerHTML = monthName;
document.getElementById('day').innerHTML = dayName;
document.getElementById('date').innerHTML = date;
document.getElementById('year').innerHTML = year;

const hours = new Date().getHours();
const minutes = new Date().getMinutes();
const seconds = new Date().getSeconds();


document.getElementById('hours').innerHTML = hours;
document.getElementById('minutes').innerHTML = minutes;
document.getElementById('seconds').innerHTML = seconds;
