console.log("entered into js");


window.onload = function(){ 
    //now that the window has loaded we add our event listeners to the videos.
    //When video1 has ended, play video2 etc
    document.getElementById("video1").addEventListener("ended", function(){ playVideo("video2"); });
    document.getElementById("video2").addEventListener("ended", function(){ playVideo("video3"); });
    document.getElementById("video3").addEventListener("ended", function(){ playVideo("video1"); });
}

function playVideo(videoID){
    //This playVideo function takes in the ID of a video element and plays that video.
    var videoElement = document.getElementById(videoID);
    videoElement.play();
}


let clip = document.querySelector(".vid")

function clickme(){
    clip.addEventListener("mouseover", function (e) {
        console.log("video play");
        clip.play();
    })
    clip.addEventListener("mouseout", function (e) {
        console.log("video pause");
        clip.pause();
    })
}



const navbar = document.querySelector('#NavBar');
/* let top = navbar.offsetTop; */
function stickynavbar() {
  if (window.scrollY >= navbar.offsetTop) {    
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');    
  }
}
window.addEventListener('scroll', stickynavbar);




console.log("exit out of js");