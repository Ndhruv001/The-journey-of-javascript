const heading=document.querySelector('#heading');
const span=document.querySelector('#score');
const newGame=document.querySelector('#newGame');
const number1=Math.floor((Math.random()*10)+1);
const number2=Math.floor((Math.random()*10)+1);
const input=document.querySelector('#input');

let array=JSON.parse(localStorage.getItem("array"));
if(!array){
    array=0;
}
const submit=document.querySelector('form');
heading.innerHTML=`What is ${number1} multiply by ${number2}?`;
span.innerHTML=`${array}`;
newGame.addEventListener('click',function(){
    localStorage.clear();
    location.reload();
});
submit.addEventListener('submit',function(){
    // event.preventDefault();
    const value=parseInt(input.value);
    if(value==(number1*number2)){
        array++;
        updateLocalStorage();
    }else{
        array--;
        updateLocalStorage();
    }
})
function updateLocalStorage(){
    localStorage.setItem('array',JSON.stringify(array));
    span.innerHTML = array;
}

