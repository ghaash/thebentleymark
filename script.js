alert("welcome to the bentley mark!");


//makes cell yellow and timeouts 100ms
function toggleBackground()
{

    redAndBlue = document.getElementById("colorToggle");
    redAndBlue.style.backgroundColor = "blue";

    // setTimeout(function()
    // {
    //     alert("cell is now highlighted");
    // }, 100);

    // below is logic to toggle which we can't do :(
    if(redAndBlue.style.backgroundColor == "blue")
    {
        redAndBlue.style.backgroundColor = "red"
    }
    else
    {
        redAndBlue.style.backgroundColor = "blue";
    }
}

//event listener for markCell
document.getElementById("toggleBackground").addEventListener("click", toggleBackground);