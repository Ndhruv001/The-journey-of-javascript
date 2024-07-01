const button=document.querySelector('button');
button.addEventListener('mouseover',(event)=>{
    const x=(event.pageX-button.offsetLeft);
    const y=(event.pageY-button.offsetTop);
    button.style.setProperty("--xpos",x+"px");
    button.style.setProperty("--ypos",y+"px");
})