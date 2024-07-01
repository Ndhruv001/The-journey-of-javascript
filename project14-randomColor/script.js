const name=document.querySelector('.name');
const box=document.querySelector('.box');
let color="#";
const hex="123456789ABCDEF";
for(let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*6)];
}
box.style.backgroundColor=color;
name.innerHTML=color;