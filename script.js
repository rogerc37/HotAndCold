const minmax = document.getElementById("minmax");
const makeguess = document.getElementById("makeguess");
const temp = document.getElementById("temp");
minmax.addEventListener('click', setBoundaries);
makeguess.addEventListener('click', guess);
var min = 0;
var max = 0;
var answer = 0;
var range = 0;
function setBoundaries()
{
    document.body.style.background = "white";
    temp.textContent = "Status: ";
    const inputmin = prompt("Enter the minimum number in your range.");
        min = (inputmin);
    const inputmax = prompt("Enter the maximum number in your range.");
        max = (inputmax);
    range = max - min;
    answer = (Math.floor((Math.random()*max - min + 1) + min));
    minmax.innerHTML = "Minimum: " + min + " Maximum: " + max;
}
function guess()
{
    const inputguess = prompt("Put in your guess.");
    if (inputguess == answer)
    {
        temp.textContent = "YOU WIN";
        document.body.style.background = "#05f511";
    }
    else if(Math.abs((inputguess-answer)) <= (0.02*range))
    {
        temp.textContent = "Status: Boiling";
        document.body.style.background = "#a30303";
    }
    else if(Math.abs((inputguess-answer)) <= (0.05*range))
    {
        temp.textContent = "Status: Burning";
        document.body.style.background = "#fa0707";
    }
    else if(Math.abs((inputguess-answer)) <= (0.1*range))
    {
        temp.textContent = "Status: Hot";
        document.body.style.background = "#fa8d07";
    }
    else if(Math.abs((inputguess-answer)) <= (0.25*range))
    {
        temp.textContent = "Status: Warm";
        document.body.style.background = "#DAA520";
    }
    else if(Math.abs((inputguess-answer)) <= (0.5*range))
    {
        temp.textContent = "Status: Chilly";
        document.body.style.background = "#04b9d1";
    }
    else if(Math.abs((inputguess-answer)) <= (0.75*range))
    {
        temp.textContent = "Status: Cold";
        document.body.style.background = "#116af0";
    }
    else
    {
        temp.textContent = "Status: Freezing";
        document.body.style.background = "#0404b3";
    }
}


