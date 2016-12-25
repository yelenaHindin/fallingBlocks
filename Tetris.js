var GameField = require('./GameField.js')
var Letters = require('./Letters.js');

var letterConstructors = {
    'L': Letters.LetterL,
    'J': Letters.LetterJ,
    'I': Letters.LetterI,
    'Z': Letters.LetterZ,
    'S': Letters.LetterS,
    'O': Letters.LetterO
}


module.exports = {
    createField: function(w, h) {
        module.exports.field = new GameField(w, h);
    },

    addLetter: function(l) {
        module.exports.letter = new letterConstructors[l];
    }
}
