var guessBank = ["quart", "lemon", "greco"];
var randWord = "";
var currentWord = "";
var counterDisp= $("#wins-counter");
var currentWordDisp= $("#current-word");
var guessCountDisp= $("#guesses-remaining");
var guessedDisp= $("#letters-guessed");
var gameBegun = false;
var generatorActive = true;
var wordGenerated = false;

// counterDisp.text("test");
// currentWordDisp.text("test");
// guessCountDisp.text("test");
// guessedDisp.text("test");

$("body").on("keydown", function(e){

    var keyCode = e.which;
    var key = "";
        if (keyCode === 65){
            key = "a";
            (key);
            }else if
                (keyCode === 66){
                    key = "b";
                (key);
            }else if
                (keyCode === 67){
                    key = "c";
            (key);
            }else if
            (keyCode === 68){
                key = "d";
                (key);
            }else if
            (keyCode === 69){
                key = "e";
                (key);
            }else if
            (keyCode === 70){
                key = "f";
                (key);
            }else if
            (keyCode === 71){
                key = "g";
                (key);
            }else if
            (keyCode === 72){
                key = "h";
                (key);
            }else if
            (keyCode === 73){
                key = "i";
                (key);
            }else if
            (keyCode === 74){
                key = "j";
                (key);
            }else if
            (keyCode === 75){
                key = "k";
                (key);
            }else if
            (keyCode === 76){
                key = "l";
                (key);
            }else if
            (keyCode === 77){
                key = "m";
                (key);
            }else if
            (keyCode === 78){
                key = "n";
                (key);
            }else if
            (keyCode === 79){
                key = "o";
                (key);
            }else if
            (keyCode === 80){
                key = "p";
                (key);
            }else if
            (keyCode === 81){
                key = "q";
                (key);
            }else if
            (keyCode === 82){
                key = "r";
                (key);
            }else if
            (keyCode === 83){
                key = "s";
                (key);
            }else if
            (keyCode === 84){
                key = "t";
                (key);
            }else if
            (keyCode === 85){
                key = "u";
                (key);
            }else if
            (keyCode === 86){
                key = "v";
                (key);
            }else if
            (keyCode === 87){
                key = "w";
                (key);
            }else if
            (keyCode === 88){
                key = "x";
                (key);
            }else if
            (keyCode === 89){
                key = "y";
                (key);
            }else if
            (keyCode === 90){
                key = "z";
                (key);
            }
            else{
                console.log("choose a letter please.");
            }
            if(gameBegun === true){
            guessedDisp.append(key);
            }
            if(gameBegun === true){
                if(currentWord.indexOf(key) !== -1){
                    var correctLetter = currentWord.indexOf(key);
                    var position =  "#" + correctLetter; 
                    var changedLetter = $(position).attr("class", "border-bottom border-dark ml-1 mr-1 float-left letterbox text-dark");
                    // console.log(key);
                    console.log(changedLetter);

                }else{
                    alert("guess again");
                }
            
             }
            gameBegun = true;
            if(gameBegun === true && generatorActive === true){
                var randWord = guessBank[Math.floor(Math.random()*guessBank.length)];
                currentWord = randWord;//sets randomly selected word to be value of empty 'currentWord' var. So if an inputed key is not "-1"
                                        //in a check fof currentWord.indexOf(key)...
                function generateLetterspace (){
                    for(var i=0; i<randWord.length; i++){
                        var letterSpace = $("<div>");
                        // letterSpace.attr("position", i); --original method of identifying created divs
                        letterSpace.attr("class", "border-bottom border-dark ml-1 mr-1 float-left letterbox text-light");
                        letterSpace.attr("id", i);
                        letterSpace.append(randWord[i]);
                        // letterSpace.text(randWord[i]);
                        currentWordDisp.append(letterSpace);
                    }
                }

                generateLetterspace();
                generatorActive = false;
                
            }
        }
);



