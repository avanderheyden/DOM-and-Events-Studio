// Write your JavaScript code here.
window.addEventListener('load', function() {
    console.log("Page is loaded");
//change flight status to "shutttle is in flight"//
let flightStatus= document.getElementById("flightStatus");
document.getElementById("flightStatus").innerHTML= "Shuttle in flight!";
console.log(flightStatus.innerHTML);
//window: "Confirm that the shuttle is ready for takeoff."//
document.getElementById("takeoff").addEventListener("click",function(){alert("Confirm that the shuttle is ready for takeoff."); });

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