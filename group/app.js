window.onload = function() {

    var bcontainer = document.getElementById("bcontainer");
    var posy = 0;
    var posx = 0;
    var rotdeg = 0;
    document.onkeydown = function(evt){
//	console.log(evt);
	switch (evt.key) {
	case "ArrowDown":
	    posy += 10;
	    //via top/left changing
	    //bcontainer.style.top = posy + 'px';
	    //via css3 transform
	    //bcontainer.style.transform = "translate(" + posx + "px, " + posy + "px)";	    
	    break;
	case "ArrowUp":
	    posy -= 10;
	    //bcontainer.style.transform = "translate(" + posx + "px, " + posy + "px)";
	    break;
	case "ArrowLeft":
	    posx -= 10;
	    //bcontainer.style.transform = "translate(" + posx + "px, " + posy + "px)";
	    break;
	case "ArrowRight":
	    posx += 10;
	    //bcontainer.style.transform = "translate(" + posx + "px, "  + posy + "px)";
	    break;
	case "r":
	    rotdeg += 3;
	    break;
	default:
	    break;
	}
	bcontainer.style.transform = "rotate(" + rotdeg + "deg) " +  "translate(" + posx + "px, "  + posy + "px)"
	
    }
}
