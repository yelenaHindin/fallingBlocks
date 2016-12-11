var linear = require('../mathLib/Linear.js');
var should = require('should');



describe('Linear algebra tests', function() {
    it('Vector addition 0', function() {
	linear.addVects([0, 0], [1, 1]).should.be.eql([1, 1]);
    });
    it('Vector addition 1', function() {
	linear.addVects([2, 0], [1, 2]).should.be.eql([3, 2]);
    });
});
