
    const submit = document.querySelector("#sub");
    const userInput = document.querySelector("#guessField");
    const guesseSlot = document.querySelector(".guesses");
    const remaining = document.querySelector(".lastResult");
    const lowHigh = document.querySelector(".lowOrHigh");
    const startOver = document.querySelector(".result");
    let randomNumber = parseInt(Math.random() * 100 + 1);
    console.log(randomNumber);
    const btn = document.createElement("button");
  
    let prevGuess = [];
    let numGuess = 1;
    let playGame = true;
  
    if (playGame) {
      submit.addEventListener("click", (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
      });
    }
  
    function validateGuess(guess) {
      if (guess > 100 || guess < 1 || isNaN(guess) || guess === "") {
        alert("Please enter a valid number");
      } else {
        prevGuess.push(guess);
        if (numGuess === 10) {
          displayGuess(guess);
          displayMessage(`Game over, Random number is ${randomNumber}`);
          endGame();
        } else {
          displayGuess(guess);
          checkGuess(guess);
        }
      }
    }
  
    function checkGuess(guess) {
      if (guess === randomNumber) {
        displayMessage(`You guessed it right value`);
        endGame();
      } else if (guess < randomNumber) {
        displayMessage(`Number is too low`);
      } else if (guess > randomNumber) {
        displayMessage(`Number is too high`);
      }
    }
  
    function displayGuess(guess) {
      userInput.value = ''; // clean up
      guesseSlot.innerHTML += `${guess},  `;
      numGuess++;
      remaining.innerHTML = `${11 - numGuess}`;
    }
  
    function displayMessage(message) {
      lowHigh.innerHTML = `<p>${message}</p>`;
    }
  
    function endGame() {
      // Perform actions when the game ends
      userInput.value = ''
      userInput.setAttribute('disabled', '' )
      btn.classList.add('button')

      btn.innerHTML = `<h2 id = 'newGame'>  Start new game</h2>`
        startOver.appendChild(btn)
        playGame = false
        newGame()
    }


   function newGame(){
  const newGameButton =   document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e){
    randomNumber =  parseInt(Math.random() * 100 + 1);
    prevGuess = []
    numGuess = 1
    guesseSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(btn)
    playGame = true



  })
   }   

  