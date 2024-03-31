function updateClock(){
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    hours = hours < 10 ? "0"+ hours : hours;
    minutes = minutes < 10 ? "0"+ minutes : minutes;
    seconds = seconds < 10 ? "0"+ seconds : seconds;

    document.getElementById("hour").textContent = hours;
    document.getElementById("minute").textContent = minutes;
    document.getElementById("second").textContent = seconds;

}
setInterval(updateClock,1000);