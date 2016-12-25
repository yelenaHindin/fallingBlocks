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


module.exports = Tetris;
