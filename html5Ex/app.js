function drag(e){
    console.log(e);
    e.dataTransfer.setData("textaaa", e.target.id);
} 

function drop(e){
    console.log(e);
    var data = e.dataTransfer.getData("textaaa");
    e.target.appendChild(document.getElementById(data));
}

function allowDrop(e){
    e.preventDefault();
}
