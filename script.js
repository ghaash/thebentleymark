// alert("welcome to the bentley mark!");

var coatChange = document.getElementById("colorToggle")

coatChange.addEventListener("click", function() {

    if(document.body.classList.backgroundColor == "blue")
    {
        document.body.style.backgroundColor == "red";
    }

    else
    {
        document.body.style.backgroundColor = "blue";
    }

});

// var button1 = document.getElementById("colorToggle");

// button1.addEventListener("click", function() {

//     if(document.body.classList.toggle("colorred") == "colorred")

// });


// makes cell yellow and timeouts 100ms
// function toggleBackground()
// {

//     redAndBlue = document.getElementById("colorToggle");
//     redAndBlue.style.backgroundColor = "blue";

//     if(document.body.style.backgroundColor == "blue")
//     {
//         document.body.style.backgroundColor = "red"
//     }
//     else
//     {
//         document.body.style.backgroundColor = "blue";
//     }
// }

// //event listener for markCell
// document.getElementById("colorToggle").addEventListener("click", toggleBackground);