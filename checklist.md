Planning
[Y] Copy this list into your project
[Y] Outline functionality of your app
[Y] Draw what the user will see
[Y] Break out components from your sketch
[Y] Name your components
[Y] Draw component hierarchy
[Y] Label where you will require functions that change state
[Y] Label where you will require data
[ ] Determine from this where you will require state & hold functions

Setup
[Y] Create your app directory (e.g. with create-react-app)
[Y] Run your app
[Y] Ensure you have React DevTools running (in browser)
[Y] Make blank components (functional or class?) as per your plan
[Y] Export and import components as per your hierarchy
[Y] Check everything is hooked up

Further functionality
[ ] Flesh out your components with methods - this is a pretty big step!

Style
[ ] Add classNames
[ ] Create and import .css file(s)

Functionality:

- We need an alphabet to pick your letter
- We need to display our guess, with placeholders for letters.
- We need a counter for number of remaining gueses
- For correct input, add letter to guess and grey out that letter
- For incorrect input, decrement the remaining gueses counter.
- Counter will equal length of stored word.
- We need a mechanism to store words to guess, starting with one word.
- Button to reset the app, and later on assign a new word.
- If we complete the word, display a 'winner' message.
- If we hit our guess limit, reveal word.
- Extension: set a time limit.

Components

- App.js - overal state
- Header
- Counter / Hangman - state for guesses
- Phrase - current state of word
- AlphabetSelector - state for correct and incorrect guesses
