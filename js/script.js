// Pulling in the DOM
const time = document.getElementById('time');
const greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

const show = true;

// show time function
const showTime = () => {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // variable for AM or PM
    const amPm = hour >=12 ? 'PM' : 'AM';

    // get time in 12 hour format
    hour = hour % 12 || 12;

    // output time
    time.innerHTML = `${hour}<span>
    </span>:${addZero(min)}<span>
    </span>:${addZero(sec)}
    ${show ? amPm : ''}`;

    // update every second
    setTimeout(showTime, 1000);
}

//add zeros
const addZero = (n) => {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// set Greeting
    let today = new Date(),
        hour = today.getHours();
    var greet
    
    if (hour < 12) {
        // good morning 
        greet = 'Good morning';
    } else if(hour < 18) {
        // good afternoon
        greet = 'Good Afternoon'
        greeting.style.color = 'purple'
    } else {
        // good evening
        greet = 'Good Evening';
        greeting.style.color = 'green'
    }
    greeting.innerHTML = `${greet + '<br>'+
    'welcome to CodeIt'}`
    
showTime()