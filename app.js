
document.getElementById("up").onclick = clickupbutton;
document.getElementById("down").onclick = clickdownbutton;
document.getElementById("left").onclick = clickleftbutton;
document.getElementById("right").onclick = clickrightbutton;
document.onkeydown = checkKey;

var r = Rectangle("container", "red", "50px", "50px");

console.log(r.getx(), r.gety());


function clickupbutton() {
  
    r.sety(r.gety() - 1);
    
}

function clickdownbutton() {
    
    r.sety(r.gety() + 1);  
   
}

function clickleftbutton() {
    
    r.setx(r.getx() - 1);  
   
}

function clickrightbutton() {
    
    r.setx(r.getx() + 1);  
    
}

function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
        clickupbutton();
    }
    else if (e.keyCode == '40') {
        clickdownbutton();
    }
    else if (e.keyCode == '37') {
       clickleftbutton();
    }
    else if (e.keyCode == '39') {
      clickrightbutton();
    }
}
