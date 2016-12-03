
var delta = {x:0,y:0};
function drag(obj, e){
    console.log(e);
    e.dataTransfer.setData("text", e.target.id);
    var r = obj.getBoundingClientRect ();
    delta.x = e.pageX - r.left;
    delta.y = e.pageY - r.top;
} 

function drop(e){
    console.log(e);
    var data = e.dataTransfer.getData("text");
    var sObj = document.getElementById(data);
    if(sObj)
	e.target.appendChild(sObj);
    sObj.style.left = (e.pageX - delta.x) + 'px';
    sObj.style.top = (e.pageY - delta.y) + 'px';
}

function allowDrop(e){
    e.preventDefault();
}
