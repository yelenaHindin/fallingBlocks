var GameField = GameField || {}

GameField.GameField = function(h, w){
    this.fieldHeight = h;
    this.fieldWidth = w;

    this.field = [];

    for (var i = 0; i < w; i++)
	this.field[i] = [];
}


GameField.GameField.prototype.isValid = function(coord) {
    if (GameField.isCoord(coord)){
	return (coord[0] < this.fieldWidth) && (coord[1] < this.fieldHeight)  &&
	    (coord[0] >= 0) && (coord[1] >= 0) &&
	    (!this.field[coord[0]][coord[1]]);
    } else if (Array.isArray(coord) && coord.every((e) => GameField.isCoord(e))) {
	coord.forEach((e) => this.isValid(e));
    } else {
	throw new Error("Unexpected argument type " + coord);
    }
}

GameField.isCoord = function(a) {
    return Array.isArray(a) && !isNaN(a[0]) && !isNaN(a[1]) && a.length == 2;
}

GameField.GameField.prototype.set = function(coord, value) {
    if (GameField.isCoord(coord)) {
	this.field[coord[0]][coord[1]] = value;
    } else if (Array.isArray(coord) && coord.every((e) => GameField.isCoord(e))) {
	coord.forEach((e) => this.set(e, value));
    } else {
	throw new Error("Unexpected argument type " + coord);
    }
}

GameField.GameField.prototype.clear = function(coord) {
    this.set(coord, null);
}

GameField.GameField.prototype.size = function() {
    return { width: this.fieldWidth, height: this.fieldHeight };
}

module.exports = GameField;


