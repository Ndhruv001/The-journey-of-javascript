const prev=document.querySelector('.prev');
const next=document.querySelector('.next');
const imageContainer=document.querySelector('.img');
let image=1;

next.addEventListener('click',()=>{
    image++;
    update();
})
prev.addEventListener('click',()=>{
    image--;
    update();
})
function update(){
    imageContainer.style.transform = `translateX(-${((image-1)%8)*350}px)`;
}
setInterval(()=>{
    image++;
    update()
},2000);