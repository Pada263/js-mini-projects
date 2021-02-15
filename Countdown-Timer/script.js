const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')

const newYear = "06 june 2021"

function countdown(){
    const newYearDate = new Date(newYear)
    const currentDate = new Date()
    
    const totalSec = (newYearDate - currentDate) /1000
    const days = Math.floor(totalSec / 3600 / 24 )
    const hours = Math.floor(totalSec / 3600) % 24
    const minutes = Math.floor(totalSec / 60) % 60
    const seconds = Math.floor(totalSec % 60)
    
    console.log(days, hours, minutes, seconds)
   
    daysEl.innerText = formatTime(days)
    hoursEl.innerText = formatTime(hours)
    minutesEl.innerText = formatTime(minutes)
    secondsEl.innerText = formatTime(seconds)
   
}
function formatTime(time){
    return time < 10 ? (`0${time}`) : time
}

countdown()
setInterval(countdown, 1000)