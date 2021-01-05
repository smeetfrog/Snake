// UPDATES AND DRAWS FOOD

import { onSnake, expandSnake } from './snake.js';
import { randomGridPosition } from './grid.js';

let food = getRandomFoodPosition(); // sets food to random position
const EXPANSION_RATE = 1; // how much snake grows when it eats food

export function update() { //checks if snake gets food
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE); //expands snake if onSnake returns true
        food = getRandomFoodPosition(); // resets food to random position
    }
};

export function draw(gameBoard) { // similar to snake draw function, but food instead
        const foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food');
        gameBoard.appendChild(foodElement);
};

function getRandomFoodPosition() { //randomizes new food position when it gets eaten, one that is not on snake
    let newFoodPosition;
    while (newFoodPosition == null || onSnake(newFoodPosition)) { //while food is null and on snake already, gets a new food position
        newFoodPosition = randomGridPosition(); //imported function to get random x and y position
    };
    return newFoodPosition;
};