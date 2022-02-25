function formSubmit(event)
{
    event.preventDefault()
}

document.querySelector("#male").addEventListener("click",() => // gender button styles upon click
{
    event.target.style.cssText = 
    `background:black;
     color:white;`

    document.querySelector("#female").style.cssText = 
    `background:white;
    color:grey;`
})
document.querySelector("#female").addEventListener("click",() =>
{
    event.target.style.cssText = 
    `background:black;
    color:white;`;

    document.querySelector("#male").style.cssText = 
    `background:white;
    color:grey;`
})