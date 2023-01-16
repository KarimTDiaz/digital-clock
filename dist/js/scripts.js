const hourElement = document.getElementById('digital-hour')
const minutesElement = document.getElementById('digital-minutes')
const secondsElement = document.getElementById('seconds')

const weekDayElement = document.getElementById('week-day')
const numericDayElement = document.getElementById('numeric-day')
const monthElement = document.getElementById('month')
const yearElement = document.getElementById('year')

const secondsMarkElement = document.getElementById('mark-seconds')

const daysOfWeek = ['Monday', 'Tuesday' , 'Wednesday' , 'Tuesday', 'Friday', 'Saturday', 'Sunday'];
const months = ["January","February","March","April","May","June","July", "August","September","October","November","December"];

const rootStyles = document.documentElement.style;
let deg;

const timeFix = n => (n <10 ? '0' + n : n)

const printHour = (date) =>{
    
    hourElement.textContent = timeFix(date.getHours());
    minutesElement.textContent = timeFix(date.getMinutes());
    secondsElement.textContent = timeFix(date.getSeconds())
    deg = (date.getSeconds() / 60) * 360
console.log(deg)

   rootStyles.setProperty('--seconds-rotate', deg+'deg')
    
}

const printDate = (date) =>{
    weekDayElement.textContent = daysOfWeek[date.getDay() -1]
    numericDayElement.textContent = timeFix(date.getDate())
    monthElement.textContent = months[date.getMonth()]
    yearElement.textContent = date.getFullYear()
}

setInterval(() => {
    const date = new Date();
    printHour(date)
    printDate(date)
}, 1000)
