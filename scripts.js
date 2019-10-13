// Write your JavaScript code here.
window.addEventListener('load', function() {
    console.log("Page is loaded");
//change flight status to "shutttle is in flight"//
    let flightStatus= document.getElementById("flightStatus");
    document.getElementById("flightStatus").innerHTML= "Shuttle in flight!";
        console.log(flightStatus.innerHTML);
//window: "Confirm that the shuttle is ready for takeoff."//
    let takeOffButton= document.getElementById("takeoff");
    document.getElementById("takeoff").addEventListener("click",function(){alert("Confirm that the shuttle is ready for takeoff."); });
//change background color from green to blue//
    let backgroundColor= document.querySelector("#shuttleBackground");
    document.querySelector("#shuttleBackground").style.background= "blue";
    console.log(backgroundColor);
//shuttle height increases by 10,000//
    let shuttleHeight=
    document.getElementById('spaceShuttleHeight').innerHTML="10,000";
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

// document.getElementById("shuttleBackground").addEventListener("takeOff", function(element) {
//     element.style="background-color:blue;"