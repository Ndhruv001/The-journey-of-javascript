const button=document.querySelector('button');
const video=document.querySelector('.trailerContent');
const icon=document.querySelector('#icon');
const main=document.querySelector('.mainContainer');
button.addEventListener('click',function(){
    video.style.display="block";
    main.style.display="none";
})
icon.addEventListener('click',function(){
    video.style.display="none";
    main.style.display="block";
})