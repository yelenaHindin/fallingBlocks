window.onload = function() {

    var bcontainer = document.getElementById("bcontainer");
    var posy = 0;
    document.onkeydown = function(evt){
	console.log(evt);
	switch (evt.key) {
	case "ArrowDown":
	    posy += 10;
	    bcontainer.style.top = posy + 'px';
	    
	    break;
/*	case "ArrowUp":
	    stopCurrentAnimation();
	    moveUp(evt);
	    break;
	case "ArrowLeft":
	    stopCurrentAnimation();
	    moveLeft(evt);
	    break;
	case "ArrowRight":
	    stopCurrentAnimation();
	    moveRight(evt);
	    break;
	case "=":
	    stopCurrentAnimation();
	    break;*/
	default:
	    break;
	}
	
    }
}
