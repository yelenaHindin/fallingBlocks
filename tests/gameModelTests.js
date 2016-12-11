var Letters = require('../Letter.js');
var should = require('should');


describe('Tetris letters game field coords', function() {
    it('S identical transform', function() {
	var s = new Letters.LetterS();
	var coords = s.gameFieldCoord([0, 0], Letters.EnumRotation.R0, [0, 0]);
	coords.should.be.eql(s.shape);
    });

    it('S translation', function() {
	var s = new Letters.LetterS();
	var coords = s.gameFieldCoord([2, 1], Letters.EnumRotation.R0, [0, 0]);
	coords.should.be.eql([[2, 2], [3, 2], [3, 1], [4, 1]]);
    });

});
