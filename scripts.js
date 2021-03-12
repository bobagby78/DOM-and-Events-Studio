// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init (){
    const missionAbort= document.getElementById('missionAbort');
    const takeoff= document.getElementById('takeoff');
    const landing= document.getElementById('landing');
    const up= document.getElementById('up');
    const down= document.getElementById('down');
    const left= document.getElementById('left');
    const right= document.getElementById('right');

    let shuttleHeight=document.getElementById('spaceShuttleHeight');
    let flightStatus= document.getElementById('flightStatus');
    let shuttleBackground= document.getElementById("shuttleBackground");

    takeoff.addEventListener('click', function(){
        let readyForTakeoff = confirm('Confirm that the shuttle is ready for takeoff.');
        if (readyForTakeoff){
            flightStatus.innerHTML = 'Shuttle in flight';
            shuttleBackground.style.backgroundColor= "blue";
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
        }
    })

    landing.addEventListener('click', function(){
        let shuttleLanding= alert('The shuttle is landing. Landing gear is engaged');
        flightStatus.innerHTML = 'The shuttle has landed';
        shuttleBackground.style.backgroundColor="green";
        shuttleHeight.innerHTML=Number(0);
    })

    missionAbort.addEventListener('click', function(){
        let abortClick= confirm("Confirm that you want to abort the mission.");
        if (abortClick){
            flightStatus.innerHTML = 'Mission aborted'; 
            shuttleBackground.style.backgroundColor= "green";
            shuttleHeight = Number(0);
        }


    })

    up.addEventListener('click', function(){
        
    })

}

window.addEventListener("load", init);