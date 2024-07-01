function updateClock(){
    const now=new Date();
    let hours=String(now.getHours()).padStart(2,'0');
    if(hours>'12'){
        hours=parseInt(hours)
        hours=hours-12;
    }
    const minutes=String(now.getMinutes()).padStart(2,'0');
    const seconds=String(now.getSeconds()).padStart(2,'0');
    const clock=document.querySelector('.digitalBox');
    clock.textContent=`${hours} : ${minutes} : ${seconds}`
}
updateClock();
setInterval(updateClock,1000);