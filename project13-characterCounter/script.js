const textArea=document.querySelector('#textArea');
const tChar=document.querySelector('.tChar');
const rChar=document.querySelector('.rChar');

textArea.addEventListener('keyup',function(event){
    updateCounter();
})
updateCounter();
function updateCounter(){
    tChar.innerHTML=textArea.value.length;
    rChar.innerHTML=textArea.maxLength-textArea.value.length;
}