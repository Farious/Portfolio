//Global parameters, adjust as you like
var frameRate = 60.0;
var scrollTime = 2.0;
var cancelMargin = 2.0;
//on load change all anchor links to buttons that scroll the page smoothly
window.addEventListener("load", doFirst, false);
function doFirst()
{
	var links = document.links;
	for(i in links)
	{
		//for every link that is an internal anchor
		if((links[i].origin == window.location.origin)&&
			(links[i].pathname == window.location.pathname))
		{
			var idx = links[i].href.lastIndexOf("#");
			if(idx!=-1 && idx!= links[i].href.length-1)
			{
				//Get the target element
				var id = links[i].href.substring(idx+1);
				targetEl = document.getElementById(id);
				//disable default anchor behavior
				links[i].onclick = function()
				{
					return false;
				};
				//add smooth scroll anchor behavior
				links[i].onmousedown = autoScrollTo.bind(this, targetEl);
			}
		}
	}
}
//initialize the scrolling
function autoScrollTo(el)
{
	//find the starting position
	var startY = window.pageYOffset;
	//find the target position
	var targetY = el.offsetTop;
	//limit the target position
	if(targetY<0.0)targetY=0.0;
	if(targetY>=document.body.offsetHeight-window.innerHeight)
		targetY=document.body.offsetHeight-window.innerHeight;
	//calculate the total offset
	var deltaY = targetY-startY;
	//calculate the offset per frame
	var distance = deltaY/(frameRate*scrollTime);
	if(distance>0 && distance < 1) distance = 1;
	if(distance<0 && distance > -1) distance = -1;
	//start the scrolling function (recursive)
	setTimeout(function()
	{
		doScroll(startY, targetY, distance);
	}, 1.0/frameRate);
	return false;
}
//Do the scrolling
function doScroll(expectedY, targetY, dist)
{
	//Get current position
	var currentY = window.pageYOffset;
	//If the user scrolls himself the code wont be executed anymore
	if(currentY > expectedY-cancelMargin && currentY < expectedY+cancelMargin)
	{
		//if the target is reached or the top or the bottom of the page
		if((dist>0&&(currentY >= targetY-dist|| currentY+dist >= document.body.offsetHeight-window.innerHeight))
			||(dist<=0&&(currentY<=targetY-dist || currentY+dist<0)))
		{
			//jump to target position
			window.scroll(0, targetY);
		}
		else
		{
			//add the delta of the distance
			var scrollY = currentY+dist;
			window.scroll(0, scrollY);
			//do the function again in "deltaTime" seconds
			setTimeout(function()
			{
				doScroll(scrollY, targetY, dist);
			}, 1.0/frameRate);
		}
	}
}