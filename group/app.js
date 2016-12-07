var posy = 0;
var posx = 0;
var rotdeg = 0;
var pxFrom = 0;
var pyFrom = 0;
var pxTo = 0;
var pyTo = 0;
var animName = "gameAnim";
var animCount = 0;

var figureGameX = 0;
var figureGameY = 0;

var fieldGameWidth = 8;
var fieldGameHeight = 8;

var cellSize = 50;

var rotation;


function moveOneDown()
{
    pxFrom = figureGameX * cellSize;
    pyFrom = figureGameY * cellSize;

    figureGameY += 1;

    pxTo = figureGameX * cellSize;
    pyTo = figureGameY * cellSize;
}

function moveOneLeft()
{
    pxFrom = figureGameX * cellSize;
    pyFrom = figureGameY * cellSize;

    figureGameX -= 1;

    pxTo = figureGameX * cellSize;
    pyTo = figureGameY * cellSize;
}

function moveOneRight()
{
    pxFrom = figureGameX * cellSize;
    pyFrom = figureGameY * cellSize;

    figureGameX += 1;

    pxTo = figureGameX * cellSize;
    pyTo = figureGameY * cellSize;
}

function rotate()
{
    console.log("rotate");
}

window.onload = function() {
    var figure = document.getElementById("figure");
    var field =  document.getElementById("field");
    var r;
    var ns = document.createElement("style");
    ns.type = "text/css";
    document.head.appendChild(ns);

    document.onkeydown = function(evt){
//	console.log(evt);
	switch (evt.key) {
	case "ArrowDown":
	    moveOneDown();
	    break;
	case "ArrowUp":
	    rotate();
	    break;
	case "ArrowLeft":
	    moveOneLeft();
	    break;
	case "ArrowRight":
	    moveOneRight();
	    break;
	default:
	    break;
	}

	var fullAnimName = animName + (animCount++);

	var cssRule = "@keyframes " + fullAnimName + " { from { transform: translate(" + pxFrom + "px, " + pyFrom + 
					   "px); } to { transform: translate(" + pxTo + "px, " + pyTo + "px); }}";


	if (document.styleSheets[1].cssRules.length > 0)
	    document.styleSheets[1].removeRule(0);

	document.styleSheets[1].insertRule(cssRule, document.styleSheets[1].cssRules.length);

	figure.style.animationDuration = "1s";
	figure.style.animationName = fullAnimName;
	figure.style.animationTimingFunction = "linear";
	figure.style.animationFillMode =  "forwards";
    }
    
}
