const submit=document.querySelector('form');
submit.addEventListener('submit',function(e){
    e.preventDefault();
    
    const heightInput = document.querySelector('#Height');
    const weightInput = document.querySelector('#Weight');
    
    // const height = parseFloat(document.querySelector('#Height').value);
    // const weight = parseFloat(document.querySelector('#Weight').value);
    const height=parseFloat(heightInput.value)
    const weight=parseFloat(weightInput.value)
    // heightInput.setCustomValidity((height === '') ? "Please enter height!" : "");
    // weightInput.setCustomValidity((weight === '') ? "Please enter weight!" : "");
    const bmiF=calculateBMI(height, weight);
    const value=document.querySelector('#bmiValue');
    const resultValue=document.querySelector('#resultValue');
    
    if (!isNaN(bmiF)) {
        value.textContent = bmiF.toFixed(2); // Display BMI value with 2 decimal places
    } else {
        value.textContent = 'Invalid input'; // Display error message if input is invalid
    }
    if(isNaN(bmiF)){
        resultValue.textContent=''
    }else if(bmiF<18.5){
        resultValue.textContent='Underweight'
    }else if(bmiF<24.9){
        resultValue.textContent='Normal'
    }else if(bmiF<29.9){
        resultValue.textContent='Overweight'
    }else{
        resultValue.textContent='Obese'
    }
})
function calculateBMI(height, weight) {
    // Calculate BMI using height and weight
    return weight / ((height / 100) ** 2);
}
function refreshPage(){
    location.reload();
}
