const container=document.querySelector('.container');
const mic=document.querySelector(' .fa-microphone');
const p=document.querySelector(' .container p');
let bool=true;
container.addEventListener('click',()=>{
    if(bool){
        container.classList.add("active");
        setTimeout(addEl,300);

    }else{
        container.classList.remove("active");
        setTimeout(removeEl,200);
    }
    bool=!bool;
})
function removeEl(){
    mic.style.display="block";
    p.style.display="block";
}
function addEl(){
    mic.style.display="none";
    p.style.display="none";
}