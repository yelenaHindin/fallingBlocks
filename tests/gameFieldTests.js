var GameField = require('../GameField.js');
var should = require('should');


describe('Tetris game field functions', function() {
    var field;

    beforeEach('initialize field', function() {
	field = new GameField.GameField(6,8);
	field.set([2, 1], "aaa");
    })

    it('empty cell valid', function() {
	field.isValid([0, 0]).should.be.true();
    });

    it('busy cell invalid', function() {
	field.isValid([2, 1]).should.be.false();
    });

    it('negative invalid', function() {
	field.isValid([-22, 1]).should.be.false();
    });

    it('out invalid', function() {
	field.isValid([22, 1]).should.be.false();
    });

});
