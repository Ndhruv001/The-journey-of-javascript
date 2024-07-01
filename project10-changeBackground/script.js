const start=document.querySelector('#start'); 
const end=document.querySelector('#end');
const body=document.querySelector('body');
function randomColor(){
    const hex="123456789ABCDEF";
    let color="#";
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}
let inter;
function startInterval(){
    inter=setInterval(function(){
        body.style.backgroundColor=randomColor();
    },1000)
}
function endInterval(){
    clearInterval(inter);
    inter=null;
}
start.addEventListener('click',startInterval);
end.addEventListener('click',endInterval);