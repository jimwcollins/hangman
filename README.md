# Sticks + Stones

## React Hangman

A hangman game built in React with numerous animated elements – including an animated hangman. Phrases to guess are pulled from the Movie DB API.

The hosted site can be found here: < To Come >

&nbsp;

## `Tech Stack`

- JavaScript
- React
- Reach router
- Axios for calls to Movie DB api
- Styled Components
- ReactTransitionGroup
- Hosting on netlify

&nbsp;

## `Features`

- Uses Reach Router to handle navigation between home and game screens.
- Uses an HTML5 canvas to display the hangman, along with JavaScript's window.requestAnimationFrame to facilitate the animation.
- Uses Axios to pull film data from the Movie DB API, which are then used as phrases to guess in the game. Titles are retrieved and filtered to remove excessively long titles and films with numbers. An initial array of 20 titles is retrieved, then if these are exhausted, the app pulls another 20. Random numbers are generated to determine both the page of titles retrieved, and the title selected from the array. Once used, film titles are removed from the array to remove any chance of them appearing again within a session.
- Uses the Styled Components Library for better management of CSS.
- Uses the ReactTransitionGroup library to facilitate numerous animated transitions between game states.
- Uses React Hooks and functional components throughout.

&nbsp;

## `Future improvements`

- Implement difficulty levels that might involve more obscure titles and fewer steps to the hangman.
- Additional modules to expand phrases beyond films to music, books, etc.
- Improve display and style of the hangman
- Persist user game state between sessions.
- Implement users and a leaderboard of scores.

&nbsp;

## `Installation`

To install locally, run the following commands:

### npm install

Install required project dependencies locally

### npm start

Runs the app in the development mode.\
Open http://localhost:3000 to view it in the browser.

### npm run build

Builds the app for production to the `build` folder.
