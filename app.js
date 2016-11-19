
document.getElementById("up").onclick = moveUp;
document.getElementById("down").onclick = moveDown;
document.getElementById("left").onclick = moveLeft;
document.getElementById("right").onclick = moveRight;
document.onkeydown = checkKey;

var b = Block("container", "red", "50px", "50px");

console.log(b.getx(), b.gety());


function moveUp() {
  
    b.sety(b.gety() - 1);
    
}

function moveDown() {
    
    b.sety(b.gety() + 1);  
   
}

function moveLeft() {
    
    b.setx(b.getx() - 1);  
   
}

function moveRight() {
    
    b.setx(b.getx() + 1);  
    
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
