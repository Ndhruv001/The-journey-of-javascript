const button=document.querySelector('button');
const nonActive=document.querySelector('.nonActive');
const animePic=document.querySelector('#animePic');
const name=document.querySelector('.name');

async function picGenerator(){
    const url="https://api.waifu.pics/sfw/neko";
    try {
        const response=await fetch(url);
        if(!response.ok){
            throw new Error("there is an error");
        }
        const result=await response.json();
        return result;
    } catch (error) {
        return null;
    }
}

button.addEventListener('click',async ()=>{
    button.innerHTML="searching...";
    name.innerHTML="searching...";
    const result=await picGenerator();
    if(result!=null){
        nonActive.classList.add('active');
        animePic.src=result.url;
        button.innerHTML="Get Anime";
        name.innerHTML="not found";
    }else{
        button.innerHTML="try again!";
    }
    
})
