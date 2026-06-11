
//turns the A key red when A key is held down nvm
document.addEventListener("keydown", (event) => {

let pressedKey = event.key.toLowerCase(); 
    document.getElementById(pressedKey).style = "background-color:darkgrey";
});


////////////////////////GONNA KILL MYSELF/////////////////////////////////


document.addEventListener("keyup", (event) => {

let pressedKey = event.key.toLowerCase(); 
    document.getElementById(pressedKey).style = "background-color:white";
});

/* play music on M key

const audio = document.createElement("audio")
audio.src = "filer/PortalRadio.ogg" ;


const musicbutton = document.getElementById("M")
musicbutton.addEventListener("click", playmusic);

function playmusic(){
    audio.play();
    }
    */

    console.log("det fungerar")


    document.addEventListener("keydown", (event) => {
    
    console.log(event.key);
    
    const sound = new Audio("filer/PortalRadio.ogg")
    
    if(event.key == "ö") {
    sound.currentTime = 0;
    
    sound.play();
    
    }})





    





