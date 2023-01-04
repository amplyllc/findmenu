let currentDay = new Date().getDay();
let num = currentDay.toString();
let days = document.getElementsByClassName("day"); 
let day = days[num].innerHTML;
let button = document.getElementById("hours-btn"); 
let hours = document.getElementById("hours-div"); 

button.addEventListener('click', function () {
        hours.classList.toggle('active');
        button.classList.toggle('active');
})
button.innerHTML = day
