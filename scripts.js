// Write your JavaScript code here.
window.addEventListener('load', function() {
    console.log("Page is loaded");
let flightStatus= document.getElementById("flightStatus");
document.getElementById("flightStatus").innerHTML= "Shuttle in flight!";
console.log(flightStatus.innerHTML);
// Remember to pay attention to page loading!
});
// function handleClick("Ready") {
//     alert("Confirm that the shuttle is ready for liftoff");
// }
// function handleClick("color") {
//     element.style="background-color: blue;"
//     ;
// }

// // onclick="handleClick('color')"
// // onclick = "handleClick('ready')"
// <!-- window.addEventListener("click", function handleClick(){}) -->