var GameField = require('./GameField.js')
var Letters = require('./Letter.js');

var letterConstructors = {
    'L': Letters.LetterL,
    'J': Letters.LetterJ,
    'I': Letters.LetterI,
    'Z': Letters.LetterZ,
    'S': Letters.LetterS,
    'O': Letters.LetterO
}


var Tetris = function() {
}

Tetris.prototype.createField = function(w, h) {
    this.field = new GameField.GameField(w, h);
}

Tetris.prototype.addLetter = function(l) {
    this.currentLetter =  new letterConstructors[l];
}

Tetris.prototype.drop = function() {
    var dropHeight = 0;

    do {
        dropHeight++;
        var nextCoord = this.currentLetter.coord;
        nextCoord[1] += dropHeight;
        var dropCoords = this.currentLetter.gameFieldCoord(nextCoord, this.currentLetter.rotation, this.currentLetter.rotationCenter);
    } while (this.field.isValid(dropCoords));
    this.currentLetter.coord[1] += dropHeight - 1;
}


module.exports = Tetris;
