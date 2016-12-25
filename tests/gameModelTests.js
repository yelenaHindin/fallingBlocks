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

    it('I rotation 90', function () {
        var i = new Letters.LetterI();
        var coords = i.gameFieldCoord([0, 0], Letters.EnumRotation.R90, [0, 0]);
        coords.should.be.eql([[0, 0], [0, 1], [0, 2], [0, 3]]);

    });

    it('I rotation 180', function () {
        var i = new Letters.LetterI();
        var coords = i.gameFieldCoord([0, 0], Letters.EnumRotation.R180, [0, 0]);
        coords.should.be.eql([[0, 0], [-1, 0], [-2, 0], [-3, 0]]);

    });

    it('I rotation 270', function () {
        var i = new Letters.LetterI();
        var coords = i.gameFieldCoord([0, 0], Letters.EnumRotation.R270, [0, 0]);
        coords.should.be.eql([[0, 0], [0, -1], [0, -2], [0, -3]]);

    });


});
