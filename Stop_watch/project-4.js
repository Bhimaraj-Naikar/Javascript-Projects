let startStop = document.querySelector('#startStop');
let reset = document.querySelector('#reset');

seconds = 0
minutes =0 
hours =0 

leadingSec = 0;
leadingMin = 0;
leadingHrs = 0;

timeInterval =null;
timeStatus = "stopped";

function stopWatch(){
    seconds++;
    if(seconds / 60 === 1){
        seconds=0
        minutes++
        if(minutes / 60 === 1){
            minutes=0
            hours++;
        }
    }
    if(seconds<10){
        leadingSec = "0" + seconds.toString();
    }else{
        leadingSec = seconds;
    }
    if(minutes<10){
        leadingMin = "0" + minutes.toString();
    }else{
        leadingMin = minutes;
    }
    if(hours < 10){
        leadingHrs = "0" + hours.toString();
    }else{
        leadingHrs = hours;
    }

    let displayTimer = document.getElementById('timer').innerText = leadingHrs+ " : " +leadingMin + " : "+leadingSec;
}

startStop.addEventListener('click',function(){

    if(timeStatus === "stopped"){
        timeInterval = window.setInterval(stopWatch,1000);
        document.getElementById('startStop').innerHTML = `Stop`;
        timeStatus = "started";
    }else{
        window.clearInterval(timeInterval);
        document.getElementById('startStop').innerHTML = `Start`;
        timeStatus = "stopped";
    }
    
})
reset.addEventListener('click',function(){
    window.clearInterval(timeInterval);
    seconds=0
    minutes=0
    hours=0
    document.getElementById('timer').innerHTML = "00 : 00 : 00"
    document.getElementById('startStop').innerHTML = `Start`;
})