var guessBank = ["apples", "oranges", "pie"];
var randWord = "";
var counterDisp= $("#wins-counter");
var currentWordDisp= $("#current-word");
var guessCountDisp= $("#guesses-remaining");
var guessedDisp= $("#letters-guessed");
var gameBegun = false;
var generatorActive = true;

// counterDisp.text("test");
// currentWordDisp.text("test");
// guessCountDisp.text("test");
// guessedDisp.text("test");

$("body").on("keydown", function(e){
    console.log(gameBegun);
    var keyCode = e.which;
    var key = "";
        if (keyCode === 65){
            key = "a";
            console.log(key);
            }else if
                (keyCode === 66){
                    key = "b";
                console.log(key);
            }else if
                (keyCode === 67){
                    key = "c";
            console.log(key);
            }else if
            (keyCode === 68){
                key = "d";
                console.log(key);
            }else if
            (keyCode === 69){
                key = "e";
                console.log(key);
            }else if
            (keyCode === 70){
                key = "f";
                console.log(key);
            }else if
            (keyCode === 71){
                key = "g";
                console.log(key);
            }else if
            (keyCode === 72){
                key = "h";
                console.log(key);
            }else if
            (keyCode === 73){
                key = "i";
                console.log(key);
            }else if
            (keyCode === 74){
                key = "j";
                console.log(key);
            }else if
            (keyCode === 75){
                key = "k";
                console.log(key);
            }else if
            (keyCode === 76){
                key = "l";
                console.log(key);
            }else if
            (keyCode === 77){
                key = "m";
                console.log(key);
            }else if
            (keyCode === 78){
                key = "n";
                console.log(key);
            }else if
            (keyCode === 79){
                key = "o";
                console.log(key);
            }else if
            (keyCode === 80){
                key = "p";
                console.log(key);
            }else if
            (keyCode === 81){
                key = "q";
                console.log(key);
            }else if
            (keyCode === 82){
                key = "r";
                console.log(key);
            }else if
            (keyCode === 83){
                key = "s";
                console.log(key);
            }else if
            (keyCode === 84){
                key = "t";
                console.log(key);
            }else if
            (keyCode === 85){
                key = "u";
                console.log(key);
            }else if
            (keyCode === 86){
                key = "v";
                console.log(key);
            }else if
            (keyCode === 87){
                key = "w";
                console.log(key);
            }else if
            (keyCode === 88){
                key = "x";
                console.log(key);
            }else if
            (keyCode === 89){
                key = "y";
                console.log(key);
            }else if
            (keyCode === 90){
                key = "z";
                console.log(key);
            }
            else{
                console.log("choose a letter please.");
            }
            if(gameBegun === true){
            guessedDisp.append(key);
            }
            gameBegun = true;
            if(gameBegun === true && generatorActive === true){
                var randWord = guessBank[Math.floor(Math.random()*guessBank.length)];
                alert(randWord);
                function generateLetterspace (){
                    for(var i=0; i<randWord.length; i++){
                        var letterSpace = $("<div>");
                        letterSpace.attr("class", "border-bottom border-dark ml-1 mr-1 float-left letterbox");
                        currentWordDisp.append(letterSpace);
                    }
                }
                generateLetterspace();
                generatorActive = false;

            }
        }
    
);

