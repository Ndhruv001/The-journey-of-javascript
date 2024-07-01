const container=document.querySelector('.container');
const feedbackContainer=document.querySelector('.feedbackContainer');
const feedback=document.querySelector('.feedback');
let imotion="Nothing";

container.addEventListener('click',(e)=>{
    console.log("current",e.currentTarget);
    console.log("just",e.target);
    if(e.target.classList.contains('imoji')){
        container.querySelectorAll('.imoji').forEach((check)=>{
            check.classList.remove('active');
        })
        e.target.classList.add('active');
        imotion=e.target.innerText;
    }
    if(e.target.tagName.toLowerCase()==='button'){
        container.classList.remove('active'); 
        feedbackContainer.classList.add('active'); 
        feedback.innerText=imotion;
    }
})

