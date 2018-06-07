
var winsCounter = document.getElementById("wins-counter");
var lossesCounter = document.getElementById("losses-counter");
var currentWordDisp = document.getElementById("current-word");
var guessesRemaining = document.getElementById("guesses-remaining");
var lettersGuessed = document.getElementById("letters-guessed");
var answerSpace = document.getElementById("answer-space");
var resetBtn = document.getElementById("reset-btn");
var gameImage = document.getElementById("game-image");

var guessBank = ["seabreeze", "spaniard", "worth", "marlborough", "gristle", "pancho", "squall"];
var randWord = "";
var currentWord = "";
var lettersArray = [];
var guessedArray = [];
var dblChecker = [];
var guessesLeft = 14;
var siegCount = 0;
var verlorCount = 0;
var success = new Audio("assets/images/princesuccess.wav");
var fail = new Audio("assets/images/fail.wav");


var gameOn = false;
var gameWon = false;
var generatorActive = true;
var wordGenerated = false;


resetBtn.addEventListener("click", reset);

document.addEventListener("keypress", setup);

function setup(){

    if(generatorActive === true){
        randWord = guessBank[Math.floor(Math.random()*guessBank.length)];
        currentWord = randWord;//sets randomly selected word to be value of empty 'currentWord' var. So if an inputed key is not "-1"
                                //in a check fof currentWord.indexOf(key)...
        lettersArray = randWord.split('');
        dblChecker = randWord.split('');

        
        function generateLetterspace (){
            for(var i=0; i<randWord.length; i++){
                var letterSpace = document.createElement("div")
                letterSpace.setAttribute("class", "border-bottom border-dark ml-1 mr-1 float-left letterbox text-dark");
                letterSpace.setAttribute("id", i);
                currentWordDisp.append(letterSpace);
                guessedArray.push("!");
                
                guessesRemaining.innerHTML = "15";
            }
            gameOn = true;
        }
        
        generateLetterspace();
        generatorActive = false;
        
        
    }
    

};

document.addEventListener("keydown", function(e){

 
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
                
                    if(lettersArray.indexOf(key) !== -1){
                    for (var j=0; j<lettersArray.length; j++){
                        if(key === dblChecker[j]){
                            var changedLetter = document.getElementById(j).innerHTML = key;
                            guessedArray[j] = key;
                            dblChecker[j]="@";

                            break;
                        }
                    }      
                        
                    
                  
                }else{
                    lettersGuessed.append(key.toUpperCase()+" ");
                }
                guessesRemaining.innerHTML = guessesLeft;
               guessesLeft --;
            
        } 
    }
    
    if(gameOn === true && guessedArray.indexOf("!") === -1){
        answerSpace.innerHTML = "That's right, the word is " + randWord + "!";
        answerSpace.setAttribute("class", "visible text-danger");
        siegCount++;
        winsCounter.innerHTML = siegCount;
        gameImage.setAttribute("src", "assets/images/prince.gif");
        success.play();
        gameOn = false;
        gameWon = true;
        setTimeout(reset, 12 * 1000);
    }

    if(gameOn === true && guessesLeft===-1 && gameWon===false){
        gameOn = false;
        answerSpace.innerHTML = "You lose";
        answerSpace.setAttribute("class", "visible text-danger");
        gameImage.setAttribute("src", "assets/images/princefail.gif");
        verlorCount++;
        lossesCounter.innerHTML = verlorCount;
        fail.play();
        setTimeout(reset, 3000);
        

    }
}
);

function reset(){
    lettersArray = [];
    guessedArray = [];    
    dblChecker = [];
    guessesLeft = 14;
    gameOn = false;
    gameWon = false;
    currentWordDisp.innerHTML = "";
    generatorActive = true;
    answerSpace.innerHTML = "";
    answerSpace.setAttribute("class", "invisible");
    answerSpace.innerHTML = "The Answer";
    guessesRemaining.innerHTML = "";
    lettersGuessed.innerHTML = "";
    gameImage.setAttribute("src", "assets/images/wof.png");
    success.pause();
    success.currentTime = 0;
    setup();


}
