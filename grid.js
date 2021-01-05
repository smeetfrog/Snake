// SETS NEW RANDOM GRID POSITION OF FOOD

const GRID_SIZE = 21;

export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1
        //math.random gets number between 0 and 1. This is multiplied by grid size to get a number between 0 and 21
        //math.floor gets the lower integer number of this random number, so it is getting a number from 0 to 20
        //1 is added to make the number between 1 and 21, which are the min and max of the gris
    };
};

export function outsideGrid(position) { //determines if snake goes outside the grid
    return (
        position.x < 1 || position.x > GRID_SIZE ||
        position.y < 1 || position.y > GRID_SIZE);  
};