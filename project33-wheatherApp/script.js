const button=document.querySelector('button');
const resultContainer=document.querySelector('.result');
const feels=document.querySelector('.feels');
const humidity=document.querySelector('.humidity');
const wind=document.querySelector('.wind');
const info=document.querySelector('.info');
const degree=document.querySelector('.degree');
const input=document.querySelector('.input');
const container=document.querySelector('.container');
const error=document.querySelector('.error');
const img=document.querySelector('.img');


const apiKey="3c7ba06e455c7f08f8bd38ce6664e2a6";

 async function fetchApi(city){
    error.innerHTML="";
    if(city){
        const api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        try {
            const response=await fetch(api);
            if(!response.ok){
                error.innerHTML="There is typography mistake."
            }
            const result=await response.json();
            return result;
        } catch (error) {
            console.log("error happened",error);
            return null;
        }
    }else{
        error.innerHTML="There is no city selected.";
    }
}

button.addEventListener('click',async ()=>{
    const data=await fetchApi(input.value);
    if(data){
        const imgUrl=`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        error.remove();
        img.src=imgUrl;
        feels.innerHTML=data.main.feels_like;
        humidity.innerHTML=data.main.humidity;
        wind.innerHTML=data.wind.speed;
        info.innerHTML= data.weather[0].description;
        degree.innerText=(data.main.temp - 273.15).toFixed(0);
        resultContainer.classList.add('active');
    }
})