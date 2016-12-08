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

FigureI.prototype.body = [{0, 0}, {1, 0},{2, 0},{3, 0}];


FigureJ = function() {
    Figures.call(this);
}

FigureJ.prototype = Object.create(Figures.prototype);

FigureJ.prototype.body = [{0, 0}, {1, 0},{2, 0},{2, 1}];


FigureL = function() {
    Figures.call(this);
}

FigureL.prototype = Object.create(Figures.prototype);

FigureL.prototype.body = [{1, 0}, {0, 0},{1, 0},{2, 0}];

FigureO = function() {
    Figures.call(this);
}

FigureO.prototype = Object.create(Figures.prototype);

FigureO.prototype.body = [{0, 0}, {1, 0},{1, 1},{0, 1}];


FigureS = function() {
    Figures.call(this);
}

FigureS.prototype = Object.create(Figures.prototype);

FigureS.prototype.body = [{1, 0}, {1, 1},{2, 0},{3, 0}];


FigureT = function() {
    Figures.call(this);
}

FigureT.prototype = Object.create(Figures.prototype);

FigureT.prototype.body = [{0, 0}, {1, 0},{2, 0},{1, 1}];


FigureZ = function() {
    Figures.call(this);
}

FigureZ.prototype = Object.create(Figures.prototype);

FigureZ.prototype.body = [{0, 0}, {1, 0},{1, 1},{1, 2}];

