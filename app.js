window.onload = function() {
    document.getElementById("up").onclick = moveUp;
    document.getElementById("down").onclick = moveDown;
    document.getElementById("left").onclick = moveLeft;
    document.getElementById("right").onclick = moveRight;
    //document.onkeydown = checkKey;
    var container = document.getElementById("container");
    container.onclick = checkMovementSide;
    
    mr45 = [[Math.cos(45), -Math.sin(45), 0] , [Math.sin(45), Math.cos(45), 0], [0, 0, 1]];
    
    window.b = Block("container", "red", "50px", "50px");
    window.l = new Linear();
    window.id = null;
    window.interval = 5;
    window.degrees = 0;

    document.getElementById("rotate").onclick = function() { stopCurrentAnimation(), rotateAnimationViaCSS()};
    
    window.ele = b.elem;
    ele.onmousedown = elemMouseDown;
    //ele.ondragstart = function(){return false};

    document.onkeydown = function(evt) {
	console.log(evt);
	switch (evt.key) {
	case "ArrowDown":
	    stopCurrentAnimation();
	    moveDown(evt);
	    break;
	case "ArrowUp":
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
	    break;
	default:
	    break;
	}
    }
}


function elemMouseDown () {
    document.onmousemove = elemMouseMove;
}

function elemMouseMove (ev) {
    var pX = ev.pageX;
    var pY = ev.pageY;
    ele.style.left = pX + "px";
    ele.style.top = pY + "px";
    document.onmouseup = elemMouseUp;
}

function elemMouseUp () {
    document.onmousemove = null;
    document.onmouseup = null;
}

function flightFrame(block) 
{
    var currTime = new Date().getTime();
    var deltaTime = currTime - block.flightStartTime;

    var x = block.flightStartPos.x + (block.velocity.x * deltaTime) / 1000;
    var y = block.flightStartPos.y + (block.velocity.y * deltaTime) / 1000;
    

    if ((x + block.clientWidth/2) > container.clientWidth) {
	x = x - 2 * (x + block.clientWidth/2 - container.clientWidth);
	block.velocity.x = -block.velocity.x;
	block.flightStartPos.x = x;
	block.flightStartTime = currTime;
    } else if ((x - block.clientWidth/2) < 0) {
	x = x + 2 * (block.clientWidth/2 - x);
	block.velocity.x = -block.velocity.x;
	block.flightStartPos.x = x;
	block.flightStartTime = currTime;
    }


    block.x = Math.floor(x - block.clientWidth/2);
    block.y = Math.floor(y - block.clientHeight/2);
}

function fly(block, velocity) 
{ 
    stopCurrentAnimation();

    b.elem.style.transform = null;

    block.velocity = velocity;
    block.flightStartPos = { x : block.x + block.clientWidth/2, y: block.y + block.clientHeight/2 };
    block.flightStartTime = new Date().getTime();

    id = setInterval(flightFrame.bind(null, b), 40);
}


function stopCurrentAnimation()
{
    if (id) {
	clearInterval(id);
	id = null;
    }
}

function stepUp(e) {
    b.y -= b.clientHeight;
}

function moveUp(e) {
    if(e.shiftKey) {
	stepUp(e);
    } else {
	stopCurrentAnimation();
	animateUp(e);
    }
}

function animateUp(e) {
    id = setInterval(frame, interval);
    function frame() {
	b.y--;
    }    
}

function stepDown(e) {
    b.y += b.clientHeight;  
}

function moveDown(e) {
    if (e.shiftKey) {
	stepDown(e);
    } else {
	stopCurrentAnimation();
	animateDown(e);
    }
}

function animateDown(e) {
    id = setInterval(frame, interval);
    function frame() {
	b.y++;
    }
}

function stepLeft(e) {
    b.x -= b.clientWidth;  
}

function moveLeft(e) {
    if (e.shiftKey) {
	stepLeft(e);
    } else {
	stopCurrentAnimation();
	animateLeft(e);
    }
}

function animateLeft(e){
    id = setInterval(frame, interval);
    function frame() {
	b.x--;
    }
}

function stepRight(e) {
    b.x += b.clientWidth;  
}

function moveRight(e) {
    if (e.shiftKey) {
	stepRight(e);
    } else if (e.altKey) {
	stopCurrentAnimation();
	
	fly(b, { x: 60, y: 0});
    }
}

function animateRight(e){
    id = setInterval(frame, interval);
    function frame() {
	b.x++;
    }
}

function checkMovementSide(e){
    var mx = e.clientX - container.offsetLeft;
    var my = e.clientY - container.offsetTop;

    var vx = mx - (b.x + b.clientWidth/2);
    var vy = my - (b.y + b.clientHeight/2);

    var resv = l.vectorMatrixMult([vx,vy,0],mr45);
    if(resv[0] > 0 && resv[1] > 0)
	moveDown(e);
    else if(resv[0] > 0 && resv[1] < 0)
	moveRight(e);
    else if(resv[0] < 0 && resv[1] < 0)
	moveUp(e);
    else if(resv[0] < 0 && resv[1] > 0)
	moveLeft(e);
}

//rotation using css transform
function rotateAnimationViaCSS() 
{
    id = setInterval(function() {
	degrees = (degrees + 1) % 360;
	b.elem.style.transform = "rotate("+ degrees + "deg)";
    }, 40);
}
