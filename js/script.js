// DOM grab
// Javascript grabs elements from a page web structure called: DOM

// grabbing an elemnt from the html with an ID of time
const time = document.getElementById('time');

// grabbing an element from html with an ID of greeting
const greeting = document.getElementById('greeting');

// boolean 
const show = true;

// function is a group of code that is designed to perform a specific action and the codes can be called anywhere in the code using just the function name.
// show time function
function showTime() {

    // below we use the js date method, from which we grab the current time,
    let today = new Date();

    // today method is inherited from the date funtion and is used to get current time in hours, min and seconds
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    // variable for AM or PM
    const amPm = hour >=12 ? 'PM' : 'AM';

    // get time in 12 hour format
    hour = hour % 12 || 12;

    // output time
    time.innerHTML = `${hour}<span></span>:${addZero(min)}<span></span>:${addZero(sec)}${show ? amPm : ''}`;

    // update every second
    setTimeout(showTime, 1000);
}

// add zeros when the value of time is less than 10
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

showTime();
