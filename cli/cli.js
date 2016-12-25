var readline = require('readline');
var Tetris = require('../Tetris.js');


Tetris.createField(6, 8);


function printField(gameState) {
    var size = gameState.field.size();

    if (Tetris.currentLetter)
        console.log("currentLetter.rotation = ", gameState.currentLetter.rotation);

    for (var y = 0; y < size.height; y++) {
        for (var x = 0; x < size.width; x++) {
            if (gameState.field.isValid([x, y])) {
                if (gameState.currentLetter) {
                    var letterCoords = gameState.currentLetter.gameFieldCoord
                    (gameState.currentLetter.coord, gameState.currentLetter.rotation, [0,0]);

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



printField(Tetris);


function lFunc(letter) {
    Tetris.addLetter(letter);
    if (!Tetris.currentLetter) {
        console.log("Unknown letter ", letter);
    }
}

function hFunc() {
    console.log("Help");
}


var cliFunction = {
    "l": lFunc,
    "h": hFunc,
    "d": function() { if (Tetris.currentLetter) Tetris.currentLetter.coord = [ Tetris.currentLetter.coord[0], Tetris.currentLetter.coord[1] + 1] },
    "r": function() { Tetris.currentLetter.rotate(); }
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
        printField(Tetris);
        rl.prompt();
    });
} else {
    printField(Tetris);
    lFunc('I');
    printField(Tetris);
    cliFunction.r();
    printField(Tetris);
}
