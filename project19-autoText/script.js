const container = document.querySelector('h1');
const career = ["Youtuber", "Instructor", "Scientist", "Chai-Wala"];
let careerIndex = 0;
let characterIndex=1;


updateCareer();
function updateCareer() {
    container.innerHTML = `I am ${career[careerIndex].slice(0,characterIndex)}`;
    if(characterIndex===career[careerIndex].length){
        careerIndex++;
        characterIndex=1;
    }
    if(careerIndex===4){
        careerIndex=0;
    }
    characterIndex++;
    setTimeout(updateCareer,300);    
}


