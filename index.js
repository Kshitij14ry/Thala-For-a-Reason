function execute() {
    
    var sumOfDigits = 0;

    let userInput = document.getElementById("display").value;
    let enteredNumber = userInput;


    if (userInput > 0) {

        while (enteredNumber > 0) {
            var remainder = enteredNumber % 10;
            enteredNumber = ((enteredNumber - remainder) / 10);
            sumOfDigits += remainder;
        }
        if (userInput % 7 == 0) {
            playAudio();
            playGIF();
            $(".outputCalc").html("Entered number is divisible by 7 &#x1F389");
        }
        else if (sumOfDigits % 7 == 0) {
            playAudio();
            playGIF();
            $(".outputCalc").html("Sum of the digits is divisible by 7 &#x1F389");
        }
        else {
            $(".outputCalc").html('" Not THALAFIED enough to see my moves &#x1F620 " - M.S. Dhoni')
        }
    }
    else {
        $(".outputCalc").html("INVALID INPUT. Only natural numbers will be considered as an input &#x1F620 ");
    }
    $(".executebtn").remove();
}


function playAudio() {
    var happyThala = new Audio("sounds/Bole\ Jo\ Koyal.mp3")
    happyThala.play();
}

function playGIF() {
    $(".gifContainer").addClass("playGIF");

    setTimeout(function () {
        $(".gifContainer").removeClass("playGIF");
    }, 28000)
}
