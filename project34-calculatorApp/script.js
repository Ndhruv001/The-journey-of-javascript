const display=document.querySelector('.display');
const key=document.querySelectorAll('.key');

key.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        if(e.target.id==="clear"){
            clear();
        }else if(e.target.id==="equal"){
            equal();
        }else{
            append(e.target.innerText);
        }
    })
})

function clear(){
    display.innerHTML="";
}
function equal(){
    display.innerText=eval(display.innerText);
}
function append(val){
    display.innerText+=val;
}