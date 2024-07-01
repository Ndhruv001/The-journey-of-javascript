const form=document.querySelector('form');
const randomNumber=Math.floor((Math.random()*100)+1);
const result=document.querySelector('.result');
const life=document.querySelector('.life');
let i=6;
life.innerHTML=`Life: ${i}`;
form.addEventListener('submit',function(e){
    e.preventDefault();
    
    const number=parseInt(document.querySelector('#number').value);
    check(number);
    if(i==0){
        const p=document.createElement('p');
        p.innerHTML="<strong>Game Over!</strong>";
        result.appendChild(p);

        setTimeout(reload,1000);
    }
})

function check(number){
    if(number==randomNumber){
        // h4Element.innerHTML=`your guess of ${number} is <strong>correct!<strong>`;
        // spanElement.textContent="correct!";
        const victory=document.createElement('div');
        victory.className="victory";
        victory.innerHTML=`your guess of ${number} is <strong>correct!<strong>`;
        result.appendChild(victory);
        const p=document.createElement('p');
        p.innerHTML = "Press <strong style='height: 25px; width: 200px; border-radius: 10px; font-weight: 700; border: 3px solid rgb(0, 0, 0); background-color: #35ec2f;  font-size: 1.1rem; padding: 5px; margin: 0;'>Play</strong> Button for <strong>Restart</strong>";
        result.appendChild(p);
    }else if(number<randomNumber){
        // h4Element.innerHTML=`your guess of ${number} is <strong>too low!<strong>${randomNumber}`;
        // spanElement.textContent="too low!";
        i--;
        const p=document.createElement('p');
        p.innerHTML=`your guess of ${number} is <strong>too low!<strong>`;
        result.appendChild(p);
        life.innerHTML=`Life: ${i}`;

    }else if(number>randomNumber){
        // h4Element.innerHTML=`your guess of ${number} is <strong>too high!<strong> `;
        // spanElement.textContent="too high!";
        i--;
        const p=document.createElement('p');
        p.innerHTML=`your guess of ${number} is <strong>too high!<strong> `;
        result.appendChild(p);
        life.innerHTML=`Life: ${i}`;
    }
}

const reloadButton=document.querySelector('.reload');
reloadButton.addEventListener('click',reload);
function reload(){
    location.reload();
}