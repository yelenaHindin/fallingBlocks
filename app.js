
document.getElementById("up").onclick = clickupbutton;
document.getElementById("down").onclick = clickdownbutton;
document.getElementById("left").onclick = clickleftbutton;
document.getElementById("right").onclick = clickrightbutton;

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