// Brake Chain Animation
function brakeChain(){
	let chain = document.getElementById('chain');
	chain.innerHTML = "&#xf0c1;";

	setTimeout(function(){
		chain.innerHTML = "&#xf127;"
	}, 1000);
}

// Call Animation
brakeChain();

// Animate Every 2 seconds
setInterval(brakeChain, 2000);

// Battery Charge Animation
function chargeBattery(){
	let battery = document.getElementById('battery');
	battery.innerHTML = "&#xf244;";
	setTimeout(function(){
	battery.innerHTML = "&#xf243;";
	}, 1000);
	setTimeout(function(){
	battery.innerHTML = "&#xf242;";
	}, 2000);
	setTimeout(function(){
	battery.innerHTML = "&#xf241;";
	}, 3000);
	setTimeout(function(){
	battery.innerHTML = "&#xf240;";
	}, 4000);
}

// Run Animation
chargeBattery();

// Run Animation Every 5 Seconds
setInterval(chargeBattery, 5000);

// Hourglass Tip Animation
function hourglassTip(){
	let hourglass = document.getElementById('hourglass');
	hourglass.innerHTML = "&#xf251;";
	setTimeout(function(){
		hourglass.innerHTML = "&#xf252;";
	}, 1000);
	setTimeout(function(){
		hourglass.innerHTML = "&#xf253;";
	}, 2000);
}

// Run Animation Every 3 Seconds
setInterval(hourglassTip, 3000);

hourglassTip();

// Image Slideshow

var i = 0; // Start point
var images = [];
var time = 3000;

// Image List
images[0] = 'img/image1.jpeg';
images[1] = 'img/image2.jpeg';
images[2] = 'img/image3.jpeg';

// Change Image
function changeImg(){
	document.slide.src = images[i];

	if(i < images.length - 1){
		i++;
	} else {
		i = 0;
	}

	setTimeout("changeImg()", time);
}

window.onload = changeImg;
