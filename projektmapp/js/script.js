
//turns the A key red when A key is held down
document.addEventListener("keydown", (event) => {

if(event.key == "a"){
    document.getElementById("a").style = "color:red";
}});
document.addEventListener("keyup", (event) => {

if(event.key == "a"){
    document.getElementById("a").style = "color:black";
}})




// play music on M key

const audio = document.createElement("audio")
audio.src = "filer/PortalRadio.ogg" ;


const musicbutton = document.getElementById("M")
musicbutton.addEventListener("click", playmusic);

function playmusic(){
    audio.play();
    
    
}

