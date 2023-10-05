const minmax = document.getElementById("minmax");
minmax.addEventListener('click', setBoundaries);
var min = 0;
var max = 0;
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
    minmax.innerHTML = "Minimum: " + min + " Maximum: " + max;
}


