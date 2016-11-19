
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

console.log(b.x, b.y);


function moveUp() {
    b.y -= b.clientHeight;
}

function moveDown() {
    b.y += b.clientHeight;  
}

function moveLeft() {
    b.x -= b.clientWidth;  
}

function moveRight() {
    b.x += b.clientWidth;  
}

function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == '38') {
        moveUp();
    }
    else if (e.keyCode == '40') {
        moveDown();
    }
    else if (e.keyCode == '37') {
       moveLeft();
    }
    else if (e.keyCode == '39') {
      moveRight();
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

