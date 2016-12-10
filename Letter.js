var Letters = Letters || {}


Letters.EnumRotation = { R0: 0, R90: 90, R180: 180, R270: 270 };

Letters.Rotation = function() {
    this.r = Letters.EnumRotation.R0;
}

Letters.Rotation.prototype.next = function() {
    this.r = (this.r + 90) % 360;
}


Letters.Letter = function() { 
    this.shape=[]; // two-dimensional array 4x2
    for (var i = 0; i < 4; i++) 
	this.shape[i] = [0, 0];

    this.coord = [0, 0];
    this.rotation = new Letters.Rotation();
}

Letters.Letter.prototype.gameFieldCoord = function() {
    throw new Error("Not implemented in superclass Letter");
}


Letters.Letter.prototype.moveLeft = function(){
    this.coord[0]--;
}

Letters.Letter.prototype.moveRight = function(){
    this.coord[0]++;
}

Letters.Letter.prototype.rotate = function(){
    this.rotation.next();
}

// I Letter

Letters.LetterI = function() {
    Letters.Letter.call(this);
    this.shape = [[0, 0], [1, 0], [2, 0] , [3, 0]];
}

Letters.LetterI.prototype = Object.create(Letters.Letter.prototype);

// J Letter
Letters.LetterJ = function() {
    Letters.Letter.call(this);
    this.shape = [[1, 0], [1, 1], [1, 2], [0, 2]];
}
Letters.LetterJ.prototype = Object.create(Letters.Letter.prototype);

// L Letter

Letters.LetterL = function() {
    Letters.Letter.call(this);
    this.shape = [[0, 0], [0, 1], [0, 2], [1, 2]];
}

Letters.LetterL.prototype = Object.create(Letters.Letter.prototype);

// O Letter
Letters.LetterO = function() {
    Letters.LetterO.call(this);
    this.shape = [[0, 0], [0, 1], [1, 1], [1, 0]];
}

Letters.LetterO.prototype = Object.create(Letters.Letter.prototype);

// S Letter
Letters.LetterS = function() {
    Letters.Letter.call(this);
    this.shape = [[0, 1], [1, 1], [1, 0], [2, 0]];
}

Letters.LetterS.prototype = Object.create(Letters.Letter.prototype);

//T Letter
Letters.LetterT = function() {
    Letters.Letter.call(this);
    this.shape = [[0, 0], [0, 1], [0, 2], [1, 1]];
}

Letters.LetterT.prototype = Object.create(Letters.Letter.prototype);


//Z Letter
Letters.LetterZ = function() {
    Letters.Letter.call(this);
    this.shape = [[0, 0], [0, 1], [1, 1], [2, 1]];
}

Letters.LetterZ.prototype = Object.create(Letters.Letter.prototype);


