/* setInterval() is a function that takes two arguments: a function and a time in milliseconds.
 1000 milliseconds = 1 second
The setInterval() method continues calling the function[one of the parameter of setInterval function] until clearInterval() is called, 
or the window is closed. */



let minutes = 25;
let seconds = 0;

function start() {
    interval = setInterval(()=> {
        
        if (seconds=== 0){
            seconds = 59;
            minutes--;
        }
        seconds--;

        if (minutes === 0 && seconds === 0) {
            stop();
            alert("Time's up! Take a break!");
        }

        displayTime(minutes, seconds);
    }, 1000);
}

function stop() {
    clearInterval(interval);
}

function reset() {
    stop();
    minutes = 25;
    seconds = 0;
    resetminutes=String("25");
    resetseconds=String("00");
    document.getElementById("timer_time_left").innerHTML = `${resetminutes}:${resetseconds}`;
    
}

function displayTime(minutes, seconds) {
    document.getElementById("timer_time_left").innerHTML = `${minutes}:${seconds}`;
}
