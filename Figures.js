Figures = function(){
    GameField.call(this);
}

Figures.prototype = Object.create(GameField.prototype);

Figures.prototype.moveDown = function(){
}

Figures.prototype.moveUp = function(){
}

Figures.prototype.moveLeft = function(){
}

Figures.prototype.moveRight = function(){
}

Figures.prototype.rotate = function(){
}


FigureI = function() {
    Figures.call(this);
}

FigureI.prototype = Object.create(Figures.prototype);


FigureJ = function() {
    Figures.call(this);
}

FigureJ.prototype = Object.create(Figures.prototype);


FigureL = function() {
    Figures.call(this);
}

FigureL.prototype = Object.create(Figures.prototype);


FigureO = function() {
    Figures.call(this);
}

FigureO.prototype = Object.create(Figures.prototype);


FigureS = function() {
    Figures.call(this);
}

FigureS.prototype = Object.create(Figures.prototype);


FigureT = function() {
    Figures.call(this);
}

FigureT.prototype = Object.create(Figures.prototype);


FigureZ = function() {
    Figures.call(this);
}

FigureZ.prototype = Object.create(Figures.prototype);

