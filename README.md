Arcade-Game
===============================


## Things Learned
- start button was originally placed under the canvas. However, the button event handler did not work. The problem is that the JavaScript file containing the event handler is above the start button in HTML. A event handler can't be used before an element is placed in HTML. **Order Matters!**.
- To debug event listener, we could use console.log("Clicked Element:", event.target) to print out the element that is clicked.
- document.getElementsByClassName() method returns an array. Document.getElementsByClassName('score')[0].innerHTML = this.score; should be used. 

## Features to be Added
- Add a START button (done)
Use [FSM](https://discussions.udacity.com/t/finite-state-machine-to-model-game-states/21955/4)
- Add a Change character button (done)
- Put gems on the map for player to collect
