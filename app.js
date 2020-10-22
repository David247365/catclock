function currentTime() {
    var date = new Date(); /* creating object of Date class */
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var midday = "AM";
    midday = (hour >= 12) ? "PM" : "AM"; /* assigning AM/PM */
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12) : hour); /* assigning hour in 12-hour format */
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec + " " + midday; /* adding time to the div */
    var t = setTimeout(currentTime, 1000); /* setting timer */
}

function updateTime(k) {
    /* appending 0 before time elements if less than 10 */
    if (k < 10) {
        return "0" + k;
    } else {
        return k;
    }
}



let videos = [
    "./assets/video.mp4",
    "./assets/pexels-free-creative-stuff-5649209.mp4",
    "./assets/video2.mp4",
    "./assets/pexels-cottonbro-5435511.mp4",
    "./assets/production ID_3796400.mp4",
    "./assets/Lotus Dancing in The Wind.mp4"
]

let getVideo;

let randomVideo;

let video = document.getElementById("video");


function getRandomVideo() {
    // randomNumber creates a random number between 0 and the last index in the array
    let randomNumber = Math.floor(Math.random() * videos.length);
    // randomQuoted grabs a random quote from the quotes array
    randomVideo = videos[randomNumber];
    /* The if statement checks if the current object in the quote array is the same as the previous on, and if it is, it runs the function again to make sure they are not the same */
    if (randomVideo === getVideo) {
        return getRandomVideo();
    }
    return randomVideo;
}

function printVideo() {
    getVideo = getRandomVideo();
  
    video.setAttribute("src", getVideo);
  
  }



printVideo();
currentTime();



