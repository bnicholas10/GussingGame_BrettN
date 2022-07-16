let guesses = 0;
let guessButton = document.getElementById("guessButton");
let resetButton = document.getElementById("resetButton");
let hintButton = document.getElementById("hintButton");
let guessList = document.getElementById("guessTracker");
let tempReporter = document.getElementById("tempReporter")
let randomNum = Math.floor(Math.random() * 100);


// Disable guess button after 5 tries. Change message to out of guesses

//create array to store guessed values. Push array to <ul>
//guess button function
guessButton.addEventListener('click', function(){
    guesses += 1;
    let numIn = document.getElementById("numIn").value
    let difference = Math.abs(numIn - randomNum)
    if (guesses >= 5){
        guessButton.disabled = true
        hintButton.disabled = true
        window.alert("Out of attempts!")
    } 
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

    // Push to guess tracker
    let guess = document.createElement('li');
    guess.innerHTML = numIn;
    // Alternative option to add text
    // guess.appendChild(document.createTextNode(numIn))
    document.getElementById('guessTracker').appendChild(guess);

    //testing
    console.log(`Guesses ` + guesses)
    console.log(`numIn ` + numIn)
    console.log(`randomNum ` + randomNum)
    console.log(`difference ` + difference)
})
//Make hitting enter in input field trigger guess


// reset button
resetButton.addEventListener(`click`, function() {
    guesses = 0;
    randomNum = Math.floor(Math.random() * 100)
    guessButton.disabled = false
    hintButton.disabled = false
    tempReporter.textContent = (`Hot or Cold?`)
    document.getElementById("numIn").value = ""
    guessList.innerHTML = ""
    console.clear()
    //make guess cards disappear
    //reset hot or cold color
})

// hint button
hintButton.addEventListener('click', function() {
    let numIn = document.getElementById("numIn").value
    if (numIn < randomNum){
        tempReporter.textContent = (`try higher!`)
    }
    else if (numIn > randomNum){
        tempReporter.textContent = (`try lower!`)
    } 
    else if (numIn === randomNum || numIn === ``){
        tempReporter.textContent = (`take a guess!`)
    }
    // console.log(numIn)
})




//Guess a number 1-100
//Indicate if guess is hot or cold
//Keep track of previous guesses