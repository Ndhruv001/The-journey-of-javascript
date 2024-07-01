const imoji=document.querySelectorAll('.fa-regular');
const rating=document.querySelectorAll('.rat');
// const star=document.querySelector('.rat');
const colorArray=["red","orange","lightblue","lightgreen","green"];

rating.forEach((element,index) => {
    element.addEventListener('click',(e)=>{
       updateRating(index);
    })
});

function updateRating(index){
    rating.forEach((element,ind)=>{
        if(ind< index+1){
            element.style.color="orange";
        }else{
            element.style.color="rgb(189, 184, 184)";
        }
    })
    imoji.forEach(img=>{
        img.style.transform=`translateX(${-48 * index}px)`;
        img.style.color=colorArray[index];
    })
}