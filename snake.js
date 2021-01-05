// ALL LOGIC FOR DRAWING AND UPDATING THE SNAKE

import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 5; 
const snakeBody = [{ x: 11, y: 11 }]; // segment on grid starting at the center
let newSegments = 0; // new segments being added to snake; defaulted at 0


// UPDATE FUNCTION
export function update() {
    addSegments(); //adds new segments to bottom of snake when it gets food

    const inputDirection = getInputDirection(); //imports updated input direction

    //loop thru every segment except last bc the last segment disappears
    for (let i = snakeBody.length - 2 /* gets 2nd to last element in snake to start from bottom */; i >= 0; i--) { 
        snakeBody[i + 1] = { ...snakeBody[i] }; // i = 2nd to last element, 1 + 1 = last element
        //sets 2nd to last element to last element to "move" the snake
    }

    snakeBody[0].x += inputDirection.x; // updates position of snake based on user input
    snakeBody[0].y += inputDirection.y;
};


// DRAW FUNCTION
export function draw(gameBoard) { // gameBoard passed thru function to draw snake on game board
    snakeBody.forEach(segment => { // executes function for each item (segments) in snakeBody array
        const snakeElement = document.createElement('div'); //calls HTML element of game board
        snakeElement.style.gridRowStart = segment.y; //setting x and y coordinate of snake on the board
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake'); //adds snake class from CSS
        gameBoard.appendChild(snakeElement); //adds snake element onto game board

    })
    console.log('draw snake');
};

export function expandSnake(amount) {
    newSegments += amount; // adds new segments to snake
};

export function onSnake(position, { ignoreHead = false } = {}) { //determines if snake is on food
    // ignoreHead = false to pass this function (head is ignored for gameOver function)
    // {} sends empty object in by default in case nothing is passed (?)
    return snakeBody.some((segment, index) => { //loops thru each segment to see if it's on snake
        //index is the index of the array, 0 being the head
        if (ignoreHead && index === 0) return false;
        // completely ignoring the head
        return equalPositions(segment, position); //returns true if segment positions are equal
    })
};

export function getSnakeHead() { // returns the first segment of the snake
    return snakeBody[0];
};

export function snakeIntersection() { // checks if head of snake is touching other segment of snake
    return onSnake(snakeBody[0], { ignoreHead: true} );
    // need to ignore the head because the head will never intersect with itself and this will always return true
};

function equalPositions(pos1, pos2) { //determines if x and y positions of two segments are equal
    return (pos1.x === pos2.x && pos1.y === pos2.y);
};

function addSegments() { //adds segments to bottom of snake
    for (let i = 0; i < newSegments; i++) { //loops thru every segment
        snakeBody.push({ ...snakeBody[snakeBody.length -1] }); //appends segments onto the end of the snake
    };

    newSegments = 0; //resets to 0 so it won't keep adding new segments
};