var readline = require('readline');
var GF = require('../GameField.js');
var letter = require('../Letter.js')

var gameField = new GF.GameField(6, 8);
var currentLetter;


function printField(field) {
    var size = field.size();

    if (currentLetter)
        console.log("currentLetter.rotation = ", currentLetter.rotation);

    for (var y = 0; y < size.height; y++) {
        for (var x = 0; x < size.width; x++) {
            if (field.isValid([x, y])) {
                if (currentLetter) {
                    var letterCoords = currentLetter.gameFieldCoord(currentLetter.coord, currentLetter.rotation, [0,0]);
                    var inLetter = false;
                    for (var c of letterCoords) {
                        if (c[0] == x && c[1] == y) {
                            inLetter = true;
                            process.stdout.write('#');
                        }
                    }
                    if (!inLetter)
                        process.stdout.write('.');
                } else {
                    process.stdout.write('.');
                }
            } else {
                process.stdout.write("*");
            }
        }
        process.stdout.write("\n");
    }
}



printField(gameField);



var letterConstructors = {
    'L': letter.LetterL,
    'J': letter.LetterJ,
    'I': letter.LetterI,
    'Z': letter.LetterZ,
    'S': letter.LetterS,
    'O': letter.LetterO
}


function lFunc(letter) {
    console.log("Create letter " + letter);
    var cnstr = letterConstructors[letter];
    if (cnstr) {
        currentLetter = new cnstr();
    } else {
        console.log("Unknown letter ", letter);
    }

}

function hFunc() {
    console.log("Help");
}


var cliFunction = {
    "l": lFunc,
    "h": hFunc,
    "d": function() { if (currentLetter) currentLetter.coord = [ currentLetter.coord[0], currentLetter.coord[1] + 1] },
    "r": function() { currentLetter.rotate(); }
};


if (process.argv.length == 2) {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    rl.setPrompt("tetris> ");
    rl.prompt();

    rl.on('line', function(line) {
        var splitInput = line.split(" ");
        var cmdStr = splitInput[0];
        var cmd = cliFunction[cmdStr];
        if (cmd) {
            cmd.apply(this, splitInput.splice(1));
        } else {
            console.log("Unknown command " + cmdStr);
        }
        printField(gameField);
        rl.prompt();
    });
} else {
    printField(gameField);
    lFunc('I');
    printField(gameField);
    cliFunction.r();
    printField(gameField);
}
