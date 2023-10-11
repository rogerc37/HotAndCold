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
    const inputmin = prompt("Enter the minimum number in your range.");
    //if(!(typeof (inputmin) === 'number'))
    //{
    //    min = "Invalid; ";
    //}
    //else{
        min = (inputmin);
    //}
    const inputmax = prompt("Enter the maximum number in your range.");
    //if(!(typeof (inputmax) === 'number'))
    //{
    //    max = "Invalid; ";
    //}
    //else{
        max = (inputmax);
    //}
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
    }
    else if(Math.abs((inputguess-answer)) <= (0.02*range))
    {
        temp.textContent = "Status: Boiling";
    }
    else if(Math.abs((inputguess-answer)) <= (0.05*range))
    {
        temp.textContent = "Status: Burning";
    }
    else if(Math.abs((inputguess-answer)) <= (0.1*range))
    {
        temp.textContent = "Status: Hot";
    }
    else if(Math.abs((inputguess-answer)) <= (0.25*range))
    {
        temp.textContent = "Status: Warm";
    }
    else if(Math.abs((inputguess-answer)) <= (0.5*range))
    {
        temp.textContent = "Status: Chilly";
    }
    else if(Math.abs((inputguess-answer)) <= (0.75*range))
    {
        temp.textContent = "Status: Cold";
    }
    else
    {
        temp.textContent = "Status: Freezing";
    }
    if((inputguess < min) || (inputguess > max))
    {
        temp.textContent = "Status: Invalid";
    }
}


