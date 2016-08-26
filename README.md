arcade-game
===============================

*** Things Learned
# start button was originally placed under the canvas. However, the button event handler did not work. The problem is that the JavaScript file containing the event handler is above the start button in HTML. A event handlder can't be used before an element is placed in HTML. **Order Matters!**.
# To debug event listener, we could use console.log("Clicked Element:", event.target) to print out the elment that is clicked.

