var posy = 0;
var posx = 0;
var rotdeg = 0;
var px = 0;
var py = 0;

window.onload = function() {
    var bcontainer = document.getElementById("bcontainer");
    var container =  document.getElementById("container");
    var r;
    var ns = document.createElement("style");
    ns.type = "text/css";
    document.head.appendChild(ns);

    document.onkeydown = function(evt){
//	console.log(evt);
	switch (evt.key) {
	case "ArrowDown":
	    posy += 10;
	    r = bcontainer.getBoundingClientRect();
	    px = r.left;
	    py = r.top;
	    bcontainer.style.animationDuration = "4s";
	    bcontainer.style.animationName = "animDown";
	    bcontainer.style.animationTimingFunction = "linear";
	    bcontainer.style.animationFillMode =  "forwards";
	  /*  document.styleSheets[1].insertRule("@keyframes animDown { 0% {left : " + px + "px; top : " + py + "px; } 100% {left : " + px + "px; top : 300px; }}", 
					       document.styleSheets[1].cssRules.length);*/
	    document.styleSheets[1].insertRule("@keyframes animDown { from { transform: translate(" + px + "px, " + py + "px); } to { transform: translate(" + px + "px, 300px); }}", 
				       document.styleSheets[1].cssRules.length);
	    break;
	case "ArrowUp":
	    posy -= 10;
	    r = bcontainer.getBoundingClientRect();
	    px = r.left;
	    py = r.top;
	    bcontainer.style.animationDuration = "4s";
	    bcontainer.style.animationName = "animUp";
	    bcontainer.style.animationTimingFunction = "linear";
	    bcontainer.style.animationFillMode =  "forwards";
	   /* document.styleSheets[1].insertRule("@keyframes animUp { 0% {left : " + px + "px; top : " + py + "px; } 100% {left : " + px + "px; top : 0px; }}", 
					       document.styleSheets[1].cssRules.length);*/
	    document.styleSheets[1].insertRule("@keyframes animUp { from { transform: translate(" + px + "px, " + py + "px); } to { transform: translate(" + px + "px, 0px); }}", 
					       document.styleSheets[1].cssRules.length);
	    break;
	case "ArrowLeft":
	    posx -= 10;
	    r = bcontainer.getBoundingClientRect();
	    px = r.left;
	    py = r.top;
	    bcontainer.style.animationDuration = "4s";
	    bcontainer.style.animationName = "animLeft";
	    bcontainer.style.animationTimingFunction = "linear";
	    bcontainer.style.animationFillMode =  "forwards";
	   /* document.styleSheets[1].insertRule("@keyframes animLeft { 0% {left : " + px + "px; top : " + py + "px; } 100% {left : 0px; top : " + py + "px; }}", 
					       document.styleSheets[1].cssRules.length);*/
	    document.styleSheets[1].insertRule("@keyframes animLeft { from { transform: translate(" + px + "px, " + py + "px); } to { transform: translate(0px," + py +"px); }}", 
					       document.styleSheets[1].cssRules.length);
	    break;
	case "ArrowRight":
	    posx += 10;
	    r = bcontainer.getBoundingClientRect();
	    px = r.left;
	    py = r.top;
	    bcontainer.style.animationDuration = "4s";
	    bcontainer.style.animationName = "animRight";
	    bcontainer.style.animationTimingFunction = "linear";
	    bcontainer.style.animationFillMode =  "forwards";
	   /* document.styleSheets[1].insertRule("@keyframes animRight { 0% {left : " + px + "px; top : " + py + "px; } 100% {left : 300px; top : " + py + "px; }}", 
					       document.styleSheets[1].cssRules.length);*/
	    document.styleSheets[1].insertRule("@keyframes animRight { from { transform: translate(" + px + "px, " + py + "px); } to { transform: translate(300px," + py +"px); }}", 
					       document.styleSheets[1].cssRules.length);
	    break;
	case "r":
	    bcontainer.style.animationDuration = "4s";
	    bcontainer.style.animationName = "animRotate";
	    bcontainer.style.animationTimingFunction = "linear";
	    bcontainer.style.animationFillMode =  "forwards";
	    document.styleSheets[1].insertRule("@keyframes animRotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); }}", document.styleSheets[1].cssRules.length);
	    break;
	case "l":
	    rotdeg += 5;
	    break;
	case "=":
	    rotdeg = 0;
	    break;
	case "!":
	    rotdeg = 90;
	    break;
	default:
	    break;
	}
//	bcontainer.style.transform =  "translate(" + posx + "px, "  + (posy + 25)  + "px) " + "rotate(" + rotdeg + "deg) translate(0px, -25px)";
	
    }
    
}
