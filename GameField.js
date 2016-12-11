GameField = function(h, w){
    this.fieldHeight = h;
    this.fieldWidth = w;
}


GameField.prototype.isValid = function(coord) {
    

}

GameField.isCoord = function(a) {
    return Array.isArray(a) && !isNan(a[0]) && !isNaN(a[1]) && a.length = 2;
}

GameField.prototype.set = function(coord, value) {
    if (GameField.isCoord(coord)) {
	this.field[coord[0]][coord[1]] = value;
    } else if (Array.isArray(coord) && coord.every((e) => GameField.isCoord(e))) {
	coord.forEach((e) => set(e, value));
    } else {
	throw new Error("Unexpected argument type " + coord);
    }
}

GameField.prototype.clear = function(coord) {
    this.set(coord, null);
}


