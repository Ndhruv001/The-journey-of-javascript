const input=document.querySelector('#input'); 
const secondContainer=document.querySelector('.secondContainer'); 
const title=document.querySelector('.title'); 
const meaning=document.querySelector('.meaning'); 
const para=document.querySelector('.para'); 
const audio=document.querySelector('audio'); 


async function fetchApi(word){
    const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    try {
        const response= await fetch(url);
        if(!response.ok){
            throw new Error("There is something network problem");
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
    
}
input.addEventListener('keyup',async (e)=>{
    if(e.target.value && e.key==="Enter"){
        para.innerHTML=`Searching the meaning of "${e.target.value}"`;
        const response= await fetchApi(e.target.value);
        displayDetails(response);
    }
}); 

function displayDetails(response) {
    if (!response) {
        para.innerHTML="there was a problem.";
        return;
    }
    para.style.display = "none";
    secondContainer.classList.add('active');
    title.innerHTML = response[0].word;
    meaning.innerHTML = response[0].meanings[0].definitions[0].definition;
    audio.src = response[0].phonetics[0].audio;
}