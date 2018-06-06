$(function(){

var winsCounter= $("#wins-counter");
var currentWordDisp= $("#current-word");
var guessesRemaining= $("#guesses-remaining");
var lettersGuessed= $("#letters-guessed");
var answerSpace = $("#answer-space");
var resetBtn = $("#reset-btn");
var gameImage = $("#game-image");

var guessBank = ["seabreeze", "spaniard", "worth", "marlborough", "gristle", "pancho", "squall"];
var randWord = "";
var currentWord = "";
var lettersArray = [];
var guessedArray = [];
var dblChecker = [];
var guessesLeft = 14;
var siegCount = 0;
var success = new Audio("assets/images/princesuccess.wav");
var fail = new Audio("assets/images/fail.wav");


var gameOn = false;
var GameWon = false;
var generatorActive = true;
var wordGenerated = false;


resetBtn.on("click", reset);

$("body").on("keypress", function setup(){
    if(generatorActive === true){
        randWord = guessBank[Math.floor(Math.random()*guessBank.length)];
        currentWord = randWord;//sets randomly selected word to be value of empty 'currentWord' var. So if an inputed key is not "-1"
                                //in a check fof currentWord.indexOf(key)...
        lettersArray = randWord.split('');
        dblChecker = randWord.split('');

        
        function generateLetterspace (){
            for(var i=0; i<randWord.length; i++){
                var letterSpace = $("<div>");
                letterSpace.attr("class", "border-bottom border-dark ml-1 mr-1 float-left letterbox text-dark");
                letterSpace.attr("id", i);
                currentWordDisp.append(letterSpace);
                guessedArray.push("!");
                
                guessesRemaining.text("15");
            }
            gameOn = true;
        }
        
        generateLetterspace();
        generatorActive = false;
        
        
    }
    

});

$("body").on("keydown", function(e){

 
    if(gameOn === true){
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
                alert("choose a letter please.");
            }

            if(gameOn === true){
                // console.log(randWord);---used for debugging, delete before final push
                
                    if(lettersArray.indexOf(key) !== -1){
                    for (var j=0; j<lettersArray.length; j++){
                        if(key === dblChecker[j]){
                            var position = "#" + j;
                            var changedLetter = $(position).text(key);
                            guessedArray[j] = key;
                            // console.log(guessedArray);---used for debugging, delete before final push
                            dblChecker[j]="@";
                            // console.log(dblChecker);---used for debugging, delete before final push
                            break;
                        }
                    }
                  
                }else{
                    lettersGuessed.append(key);
                }
                guessesRemaining.text(guessesLeft);
                guessesLeft--;

            
        } 
    }

    if(gameOn === true && guessedArray.indexOf("!") === -1){
        answerSpace.text("That's right, the word is " + randWord + "!");
        answerSpace.attr("class", "visible");
        siegCount++;
        winsCounter.text(siegCount);
        gameImage.attr("src", "assets/images/prince.gif");
        success.play();
        gameOn = false;
        gameWon = true;
    }
    if(guessesLeft===-1 && gameWon===false){
        gameOn = false;
        answerSpace.text("You lose");
        answerSpace.attr("class", "visible");
        gameImage.attr("src", "assets/images/princefail.gif");
        fail.play();
    }
}
);

function reset(){
    lettersArray = [];
    guessedArray = [];    
    dblChecker = [];
    guessesLeft = 14
    gameOn = false;
    gameWon = false;
    currentWordDisp.empty();
    generatorActive = true;
    answerSpace.empty();
    answerSpace.attr("class", "invisible");
    answerSpace.text("The Answer");
    guessesRemaining.empty();
    lettersGuessed.empty();
    gameImage.attr("src", "assets/images/wof.png");
    success.pause();
    success.currentTime = 0;
    play.currentTime = 0;

}

});