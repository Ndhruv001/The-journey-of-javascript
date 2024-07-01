const b = document.querySelectorAll(".box");
// const body=document.querySelector('body');
const ch=document.querySelector('body');
b.forEach(function(element){
    element.addEventListener('click',function(e){
      if(e.target.id==='yellow'){
        ch.style.backgroundColor="rgb(248, 231, 79)"
      }
      if(e.target.id==='blue'){
        ch.style.backgroundColor="rgb(35, 9, 182)"
      }
      if(e.target.id==='white'){
        ch.style.backgroundColor="white"
      }
      if(e.target.id==='grey'){
        ch.style.backgroundColor="rgb(95, 91, 91)"
      }
    })
})

// function add(color){
//     const boxs=document.querySelector('.boxs');
//     const newE=document.createElement('button')
//     newE.className="box"
//     newE.id=color;
//     newE.style.height = "100px"; 
//     newE.style.width = "100px"; 
//     newE.style.backgroundColor=color;
//     boxs.appendChild(newE);
// }
// add("red");