
document.getElementById("up").onclick = moveUp;
document.getElementById("down").onclick = moveDown;
document.getElementById("left").onclick = moveLeft;
document.getElementById("right").onclick = moveRight;
document.onkeydown = checkKey;
var container = document.getElementById("container");
container.onclick = checkMovementSide;

var mr45 = [[Math.cos(45), -Math.sin(45), 0] , [Math.sin(45), Math.cos(45), 0], [0, 0, 1]];

var b = Block("container", "red", "50px", "50px");
var l = new Linear();
var id;
var interval = 5;

console.log(b.x, b.y);

function stepUp(e) {
    b.y -= b.clientHeight;
}

function moveUp(e) {
    if(e.shiftKey)
	stepUp(e);
    else
	animateUp(e);
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
    if(e.shiftKey)
	stepDown(e);
    else 
	animateDown(e);
}

function animateDown(e) {
    id = setInterval(frame, interval);
    function frame() {
	b.y++;
    }
}

function moveLeft(e) {
    if(e.shiftKey)
	b.x -= b.clientWidth;  
}

function moveRight(e) {
    if(e.shiftKey)
	b.x += b.clientWidth;  
}

function checkKey(e) {
    var key = e.which || e.keyCode;
    if (key == '38') {
	moveUp();
    }
    else if (key == '40') {
	moveDown();
    }
    else if (key == '37') {
	moveLeft();
    }
    else if (key == '39') {
	moveRight();
    }
    else if (key == '187') {
	clearInterval(id);	
    }
 }

function checkMovementSide(e){
    var mx = e.clientX - container.offsetLeft;
    var my = e.clientY - container.offsetTop;

    var vx = mx - (b.x + b.clientWidth/2);
    var vy = my - (b.y + b.clientHeight/2);

    var resv = l.vectorMatrixMult([vx,vy,0],mr45);
    if(resv[0] > 0 && resv[1] > 0)
	moveDown();
    else if(resv[0] > 0 && resv[1] < 0)
	moveRight();
    else if(resv[0] < 0 && resv[1] < 0)
	moveUp();
    else if(resv[0] < 0 && resv[1] > 0)
	moveLeft();
}

