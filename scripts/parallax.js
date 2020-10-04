var frameHeight = 0.265;
window.addEventListener("load", parallaxFirst, false);
window.addEventListener("resize", parallaxFirst, false);

//precalculate some data
var containers = [];
var images = [];
var iHeights = [];
var diffHeights = [];
var offsets = [];

function parallaxFirst()
{
	var domContainers = document.getElementsByClassName("parallax");
	for(i = 0, len = domContainers.length; i<len; i++)
	{
		var container = domContainers[i]; containers.push(container);
		//the first image defined inside a parallax div will be the scrolling image
		var image = container.getElementsByTagName('img')[0]; images.push(image);
		image.style.transform = 'translateY(' + 0 + 'px)';
		image.style.left="0";
		image.style.width="100%";
		image.style.position="absolute";
		//precalculate dat data
		var iHeight = image.height; iHeights.push(iHeight);
		diffHeights.push(iHeight - container.offsetHeight);
		offsets.push(container.offsetTop);
	    //set the width of the containers with initial values
		if (window.innerWidth <= 640)
		{
		    container.style.height = '10em';
		    image.style.transform = 'translateY(' + 0 + 'px)';
		}
		else
		{
		    var iAR = iHeight / image.width;
		    container.style.height = '19.869em';
		}
	}
	resizeFrames();//resize everything according to those initial values
}
function resizeFrames()
{
	iHeights = [];
	diffHeights = [];
	offsets = []; 
	for(i = 0, len = containers.length; i<len; i++)
	{
		var container = containers[i];
		var image = images[i];
		image.style.transform = 'translateY(' + 0 + 'px)';
		
		iHeights.push(image.height);
		diffHeights.push(iHeights[i] - container.offsetHeight);
		offsets.push(container.offsetTop);
		
		if (window.innerWidth <= 640) {
		    container.style.height = 200 + 'px';
		    image.style.transform = 'translateY(' + 0 + 'px)';
		}
		else {
		    var iAR = image.height / image.width;
		    container.style.height = iAR * 1920 * frameHeight + 'px';
		}
	}
	parallax();
}
function parallax()
{
	var scrollPos = window.pageYOffset;
	var windowHeight = window.innerHeight;
	
	for(i = 0, len = containers.length; i<len; i++)
	{
	    var image = images[i];
	    image.style.transform = 'translateY(' + 0 + 'px)';
		if (window.innerWidth <= 640)
		{
		    image.style.transform = 'translateY(' + 0 + 'px)';
		}
		else
		{
		    var iHeight = iHeights[i];
		    var mult = iHeight / windowHeight;

		    var pos = ((scrollPos - offsets[i]) / iHeight) * diffHeights[i];//*mult;
		    image.style.transform = 'translateY(' + pos + 'px)';
		}
	}
}
window.addEventListener('scroll', parallax, false);