var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

	// page load: Initialize the video element and turn off autoplay and turn off looping.
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("video autoplay is set to " + video.autoplay);
	console.log("video loop is set to " + video.loop);
});

// play button: Play the video and update (display) the volume information.  
document.querySelector('#play').addEventListener("click", function(){
    console.log("video plays");
    video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + '%';
})

// pause button: Pause the video.
document.querySelector("#pause").addEventListener("click", function(){
	console.log('paused video');
	video.pause()
})

// slow down: Increase the current video speed each time button is clicked and log the new speed to the console.
document.querySelector("#slower").addEventListener("click", function(){
	console.log("slowing down by 10%...");
	video.playbackRate *= 0.9;
	console.log("current playback rate is " + video.playbackRate);
})

// speed up: Increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down. 
//CHECK THIS!!  If you slow down three times and then speed up three times you should be within 5 digits of 100% again.
document.querySelector("#faster").addEventListener("click", function(){
	console.log("speeding up by 10%...");
	video.playbackRate /= 0.9;
	console.log("current playback rate is " + video.playbackRate);
})

// skip ahead: Advance the current video by 10 seconds.  
//If the video length has been exceeded go back to the start of the video - no farther.   
//Log the current location of the video.
document.querySelector("#skip").addEventListener("click", function(){
	console.log("skipping ahead by 10 seconds...");
	if (video.currentTime + 10 >= video.duration) {
		video.currentTime = 0;
		console.log('video restarts')
	} else {
		video.currentTime += 10;
	}
	console.log("current time in video is " + video.currentTime + " seconds")
})

// mute: Mute/unmute the video and update the text in the button.
document.querySelector("#mute").addEventListener("click", function(){
	if (video.muted == false) {
		console.log("video is now muted");
		video.muted = true;
		document.querySelector("#mute").innerHTML = 'Unmute';
		document.querySelector("#volume").innerHTML = '0%';
	} else {
		console.log("video is now unmuted");
		video.muted = false;
		document.querySelector("#mute").innerHTML = 'Mute';
		document.querySelector("#volume").innerHTML = video.volume * 100 + '%';
	}
})

// volume slider: Change the volume based on the slider and update the volume information.
document.querySelector("#slider").addEventListener("change", function(s){
	console.log("volume changin'");
	video.volume = s.currentTarget.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + '%';
})

// styled: Utilize the existing oldSchool class on the video element
document.querySelector('#vintage').addEventListener("click", function(){
	console.log("old school cool mode: on");
	document.querySelector('.video').className += " oldSchool";
})

// original: Remove the oldSchool class from the video.
document.querySelector('#orig').addEventListener("click", function(){
	console.log("old school cool mode: off");
	document.querySelector('.oldSchool').className = "video";
})