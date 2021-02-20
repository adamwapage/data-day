const month = new Date().getMonth();
const day = new Date().getDay();
const date = new Date().getDate();
const year = new Date().getFullYear();


document.getElementById('month').innerHTML = month;
document.getElementById('day').innerHTML = day;
document.getElementById('date').innerHTML = date;
document.getElementById('year').innerHTML = year;
