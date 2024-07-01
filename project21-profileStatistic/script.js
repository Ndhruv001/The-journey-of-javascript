const counter=document.querySelectorAll('.counter');

counter.forEach(element=>{
    element.innerHTML="0";
    
    increamentCounter();
    function increamentCounter(){
        let currentValue = parseInt(element.innerHTML);
        const dataCeil=element.getAttribute("data-ceil");

        const increment = parseInt(dataCeil) / 15; // Calculate the increment based on data-ceil
        currentValue += increment;

        if(currentValue < parseInt(dataCeil)){
            element.innerHTML = Math.floor(currentValue);
            setTimeout(increamentCounter,50);
        }else{
            element.innerHTML = dataCeil;
        }
    }
})