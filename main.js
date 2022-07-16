let guesses = 0;
let guessButton = document.getElementById("guessButton");
let resetButton = document.getElementById("resetButton");
let hintButton = document.getElementById("hintButton");
let guessList = document.getElementById("guessTracker");
let randomNum = Math.floor(Math.random() * 100);
let tempReporter = document.getElementById("tempReporter")
// tempReporter.textContent = ('test')
// console.log(tempReporter)
// console.log(randomNum)

// Disable guess button after 5 tries
if (guesses > 5){
    guessButton.disabled = true
    hintButton.disabled = true 
}

    //guess button function
guessButton.addEventListener('click', function(){
    let numIn = document.getElementById("numIn").value
    let difference = Math.abs(numIn - randomNum)
    if (difference === 0){
        tempReporter.textContent = (`Winner!`)
        guessButton.disabled = true
        hintButton.disabled = true
    }
    else if (difference < 6){
        tempReporter.textContent = (`Blazing!!`)
    }
    else if (difference < 26){
        tempReporter.textContent = (`Hot!`)
    }
    else if (difference < 51){
        tempReporter.textContent = (`Warm`)
    }
    else if (difference < 76){
        tempReporter.textContent = (`Cold`)
    }
    else{
        tempReporter.textContent = (`Freezing!`)
    }
    guesses += 1;
    console.log(`Guesses ` + guesses)
    console.log(`numIn ` + numIn)
    console.log(`randomNum ` + randomNum)
    console.log(`difference ` + difference)
    return guesses;
})

// reset button
resetButton.addEventListener(`click`, function() {
    guesses = 0;
    randomNum = Math.floor(Math.random() * 100)
    guessButton.disabled = false
    hintButton.disabled = false
    tempReporter.textContent = (`Hot or Cold?`)
    //make guess cards disappear
    //reset hot or cold color
})

// hint button
hintButton.addEventListener('click', function() {
    let numIn = document.getElementById("numIn").value
    let tooLowMsg = `try higher!`
    let tooHighMsg = `try lower!`
    if (numIn < randomNum){
        console.log(tooLowMsg)
    }
    if (numIn > randomNum){
        console.log(tooHighMsg)
    } 
})



// Reveal 'out of tries text'

//Guess a number 1-100
//Indicate if guess is hot or cold
//Keep track of previous guesses
