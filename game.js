import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js';
import { update as updateFood, draw as drawFood } from './food.js';
import { outsideGrid } from './grid.js';

let lastRenderTime = 0; // sets render time to 0 in main function
let gameOver = false; // checks if game is lost; defaults to false
const gameBoard = document.getElementById('game-board'); // grabs game board from HTML


/* MAIN GAME LOOP: constantly updates snake and food position 
currentTime passed thru main function is initial time stamp.*/
function main(currentTime) {
    if (gameOver) {
        if (confirm('You lost. Press ok to restart.')) { // if you lose, browser will show box to restart
            window.location = "/"; //restarts game if returns true. if false, game stops
        }
        return;
    };

    window.requestAnimationFrame(main); // tells browser to perform/update animation frame
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000; /* gets seconds since last render and 
    converts from seconds to milliseconds*/
    if (secondsSinceLastRender < 1 / SNAKE_SPEED /* imported from game.js */) {
        return; /* determines if the snake should move.
        calculates if seconds since last render is less than time between renders.
        1/SNAKE_SPEED = number of seconds between each move */
      };

    lastRenderTime = currentTime; // updates new render time

    update(); // updates all game logic
    draw(); // draws snake and food based on update

};

window.requestAnimationFrame(main); //starts the main loop

// UPDATE FUNCTION
function update() {
    updateSnake();
    updateFood();
    checkDeath();
};

function draw() {
    gameBoard.innerHTML = ''; //clears board with each render to "delete" end segments as snake moves
    drawSnake(gameBoard); // passes gameBoard in to actually draw the board
    drawFood(gameBoard);
};

function checkDeath() { //checks if game is lost
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
    // game is over if we go outside of grid or intersects with itself
    // getSnakeHead gets first segment of snake
};