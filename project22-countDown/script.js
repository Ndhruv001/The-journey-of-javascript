const days=document.querySelector('.days');
const minutes=document.querySelector('.minutes');
const hours=document.querySelector('.hours');
const seconds=document.querySelector('.seconds');

const newYearDate=new Date("Jan 1, 2025 00:00:00").getTime();
updateCountDown();
function updateCountDown(){
    const now=new Date().getTime();
    const gap=newYearDate-now;
    const second=1000;
    const minute=second*60;
    const hour=minute*60;
    const day=hour*24;

    const d = String(Math.floor(gap / day)).padStart(2, '0');
    const h = String(Math.floor((gap % day) / hour)).padStart(2, '0');
    const m = String(Math.floor((gap % hour) / minute)).padStart(2, '0');
    const s = String(Math.floor((gap % minute) / second)).padStart(2, '0');    
    days.innerHTML=d;
    hours.innerHTML=h;
    minutes.innerHTML=m;
    seconds.innerHTML=s;
}
setInterval(updateCountDown,1000);