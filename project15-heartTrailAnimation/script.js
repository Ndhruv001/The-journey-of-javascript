const body=document.querySelector('body');
body.addEventListener('mousemove',(event)=>{
    const x=event.offsetX;
    const y=event.offsetY;
    const span=document.createElement('span');
    span.className="heart";
    span.style.left = x + "px";
    span.style.top = y + "px";
    const size=Math.floor(Math.random()*100);
    span.style.width=size+"px"
    span.style.height=size+"px"
    body.appendChild(span);
    setTimeout(function(){
        span.remove();
    },3000)
})