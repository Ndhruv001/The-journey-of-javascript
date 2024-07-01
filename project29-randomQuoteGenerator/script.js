const button=document.querySelector('button');
const quote=document.querySelector('.quote');
const writer=document.querySelector('.writer');

async function quoteGenerator(){
    const url="https://api.quotable.io/random";
    try {
        const response= await fetch(url);
        if(!response.ok){
            throw new Error("there some issue");
        }
        const result= await response.json();
        return result;
    } catch (error) {
        console.log('there is an error',error);
        return null;
    }
};

button.addEventListener('click', async ()=>{
    quote.innerHTML="Loading...";
    writer.innerHTML="";
    button.innerText="Searching..";
    const response=await quoteGenerator();
    button.innerText="GET A QUOTE";
    quote.innerHTML=response.content;
    writer.innerHTML=response.author;
});