const alert=document.querySelector('.alert');
const button=document.querySelector('.generate');
const copy=document.querySelector('.fa-copy');
const display=document.querySelector('.display h2');
const p=document.querySelector('.alert p');


const alphaC = [];
for (let i = 65; i <= 90; i++) {
  alphaC.push(String.fromCharCode(i));
}
const alphaS = [];
for (let i = 97; i <= 122; i++) {
  alphaS.push(String.fromCharCode(i));
}

button.addEventListener('click',()=>{
    let password="";
    let alpha="";
    const randomNumber=Math.floor(Math.random()*10000000+100000);
    for(let i=0;i<4;i++){
        let isOdd=Math.floor(Math.random()*100);
        if(isOdd%2==0){
            alpha+=alphaC[Math.floor(Math.random()*alphaC.length)];
        }else{
            alpha+=alphaS[Math.floor(Math.random()*alphaS.length)];
        }
    }
    password=alpha+(randomNumber);
    display.innerHTML=password;
})
copy.addEventListener('click',()=>{
    if(display.innerHTML==""){
        p.innerHTML="Unsuccessful";
    }else{
        navigator.clipboard.writeText(display.innerHTML);
        display.innerHTML="";
    }
    alert.classList.add('active');
    setTimeout(removeClass,1000);
})
function removeClass(){
    alert.classList.remove('active');
    p.innerHTML="Password Copied";
}