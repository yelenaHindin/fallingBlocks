if (process) {
    var Linear = require('./mathLib/Linear.js');
}

var Letters = Letters || {}

Letters.EnumRotation = { R0: 0, R90: 90, R180: 180, R270: 270 };



Letters.Letter = function() {
    this.shape=[]; // two-dimensional array 4x2
    for (var i = 0; i < 4; i++)
	this.shape[i] = [0, 0];

    this.coord = [0, 0];
    this.rotation = Letters.EnumRotation.R0;
}

Letters.Letter.prototype.rotate = function() {
    this.rotation = (this.rotation + 90) % 360;
}


Letters.Letter.prototype.gameFieldCoord = function(coord, rotation, rotationCenter) {
    var res = [];

    for (var i = 0; i < this.shape.length; i++) {
	var fromRotationPoint = Linear.substractVects(this.shape[i], rotationCenter);
	switch (rotation) {
	case Letters.EnumRotation.R0:
	    break;
	case Letters.EnumRotation.R90:
	    fromRotationPoint = [-fromRotationPoint[1], fromRotationPoint[0]];
	    break;
	case Letters.EnumRotation.R180:
	    fromRotationPoint = [-fromRotationPoint[0], -fromRotationPoint[1]];
	    break;
	case Letters.EnumRotation.R270:
	    fromRotationPoint = [fromRotationPoint[1], -fromRotationPoint[0]];
	    break;
	default:
	    break;
	}

	var fieldVec = Linear.addVects(fromRotationPoint, [-rotationCenter[0], -rotationCenter[1]]);
	fieldVec = Linear.addVects(fieldVec, coord);
	res.push(fieldVec);
    }

    return res;
}


Letters.Letter.prototype.moveLeft = function(){
    this.coord[0]--;
}

Letters.Letter.prototype.moveRight = function(){
    this.coord[0]++;
}

// I Letter

Letters.LetterI = function() {
    Letters.Letter.call(this);
    this.shape = [[0, 0], [1, 0], [2, 0] , [3, 0]];
    this.rotationCenter = [0, 2];
}

Letters.LetterI.prototype = Object.create(Letters.Letter.prototype);

// J Letter
Letters.LetterJ = function() {
    Letters.Letter.call(this);
    this.shape = [[1, 0], [1, 1], [1, 2], [0, 2]];
    this.rotationCenter = [1, 1];
}
Letters.LetterJ.prototype = Object.create(Letters.Letter.prototype);

// L Letter

Letters.LetterL = function() {
    Letters.Letter.call(this);
    this.shape = [[0, 0], [0, 1], [0, 2], [1, 2]];
    this.rotationCenter = [0, 1];
}

Letters.LetterL.prototype = Object.create(Letters.Letter.prototype);

// O Letter
Letters.LetterO = function() {
    Letters.LetterO.call(this);
    this.shape = [[0, 0], [0, 1], [1, 1], [1, 0]];
}

Letters.LetterO.prototype = Object.create(Letters.Letter.prototype);

Letters.LetterO.prototype.gameFieldCoord = function(coord, rotation, rotationCenter)
{
    return shape.map((e) => Linear.addVects(coord, e));
}

// S Letter
Letters.LetterS = function() {
    Letters.Letter.call(this);
    this.shape = [[0, 1], [1, 1], [1, 0], [2, 0]];
    this.rotationCenter = [1, 1];
}

Letters.LetterS.prototype = Object.create(Letters.Letter.prototype);

//T Letter
Letters.LetterT = function() {
    Letters.Letter.call(this);
    this.shape = [[0, 0], [0, 1], [0, 2], [1, 1]];
    this.rotationCenter = [1, 0];
}

Letters.LetterT.prototype = Object.create(Letters.Letter.prototype);

//Z Letter
Letters.LetterZ = function() {
    Letters.Letter.call(this);
    this.shape = [[0, 0], [0, 1], [1, 1], [2, 1]];
    this.rotationCenter = [1, 1];
}

Letters.LetterZ.prototype = Object.create(Letters.Letter.prototype);

module.exports = Letters;
