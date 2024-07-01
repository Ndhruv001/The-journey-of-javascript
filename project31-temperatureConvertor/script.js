const input = document.querySelectorAll('.input');
const celsius = document.querySelector('#celsius');
const fehrenheit = document.querySelector('#fehrenheit');
const kelvin = document.querySelector('#kelvin');

function updateDegree(unit, val) {
    if(val){
        switch (unit) {
            case 'celsius':
                fehrenheit.value = (val * 9 / 5) + 32;
                kelvin.value = parseFloat(val) + 273.15;
                break;
            case 'fehrenheit':
                celsius.value = (val - 32) * 5 / 9;
                kelvin.value = (parseFloat(val) + 459.67) * 5 / 9;
                break;
            case 'kelvin':
                fehrenheit.value = (val * 9 / 5) - 459.67;
                celsius.value = parseFloat(val) - 273.15;
                break;
        }
    }else{
        celsius.value = '';
        fehrenheit.value = '';
        kelvin.value = '';
    }
}

input.forEach((element) => {
    element.addEventListener('input', (e) => {
        updateDegree(e.target.id, e.target.value);
    });
});

updateDegree(null, 0);