Arcade-Game
===============================
## Menu
- Start
Press "start" button to start the game. It can also reset the game when a game is in play.
- Change character
Press this button to toggle between two characters.
- Score
Display the current score. Player can gain scores by collecting blue gem and green gem.
- "You Are the Hero!"
This message shows up below the "Score" when a player gets to the sea. It disappears when "Start" button is pressed.

## How to play
- press the 'arrow up', 'arrow down', 'arrow left' and 'arrow right' on keyboard to move the character
- if the character hits one of the bugs, the character will be set back to his original position
- the character can earn scores by collecting gems. Each gem is worth 10 scores. 


## Things Learned
- start button was originally placed under the canvas. However, the button event handler did not work. The problem is that the JavaScript file containing the event handler is above the start button in HTML. A event handler can't be used before an element is placed in HTML. **Order Matters!**.
- To debug event listener, we could use console.log("Clicked Element:", event.target) to print out the element that is clicked.
- document.getElementsByClassName() method returns an array. Document.getElementsByClassName('score')[0].innerHTML = this.score; should be used.
- A gem can be removed by delete the gem object (allGems.splice(j,1);)

## Features to be Added
- Add a START button (done)
Use [FSM](https://discussions.udacity.com/t/finite-state-machine-to-model-game-states/21955/4)
- Add a Change character button (done)
- Put gems on the map for player to collect
