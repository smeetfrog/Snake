// GETS USER INPUT INFO

let inputDirection = { x: 0, y: 0 }; //defaults snake to move initially
let lastInputDirection = { x: 0, y: 0 }; //defaults previous input direction

window.addEventListener('keydown', e => { // sets particular events when key is pressed
    // keydown = when ANY key is pressed, e = event
    switch (e.key) { //selects which event passed on input
        case 'ArrowUp':
            if (lastInputDirection.y !== 0) break; // if snake is moving down or up, you cannot move it up
            inputDirection = { x: 0, y: -1}; // y is -1 to move upwards
            break;
        case 'ArrowDown':
            if (lastInputDirection.y !== 0) break;
            inputDirection = { x: 0, y: 1};
            break;
        case 'ArrowLeft':
            if (lastInputDirection.x !== 0) break; // if snake is moving right or left, it cannot go left
            inputDirection = { x: -1, y: 0};
            break; 
        case 'ArrowRight':
            if (lastInputDirection.x !== 0) break;
            inputDirection = { x: 1, y: 0};
            break;
    }
});

export function getInputDirection() {
    lastInputDirection = inputDirection; // stores input direction so you can't move snake in opposite direction than last input
    return inputDirection;
};