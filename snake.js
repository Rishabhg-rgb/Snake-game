//game variables
let inputDir = { x: 0, y: 0 };
let score = 0;

let speed = 19;
let lastPaintTime = 0;
let snakeArr = [
    { x: 13, y: 15 }
]

food = { x: 6, y: 7 }

let board = document.getElementsByClassName('board')

//Game functions
function main(ctime) {
    window.requestAnimationFrame(main)
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    lastPaintTime = ctime
    gameEngine()
}

function isCollide(snake) {
    // if you bump into yourself
    for (let i = 1; i < snakeArr.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true
        }
    }
    // if you bump into wall
    if (snake[0].x >= 18 || snake[0].x <= 18 && snake[0].y >= 18 || snake[0].y <= 0) {
        return true
    }
}



function gameEngine() {
    //part 1: updating the snake array and food
    // part 2: display the snake and food

    // part 1
    if (isCollide(snakeArr)) {
        inputDir = { x: 0, y: 0 }
        alert('game over press any key to play game')
        snakeArr[{ x: 13, y: 15 }]
        score = 0
    }

    // if you eaten the food increment the score and regenrate the food
    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
        score += 1;
        
        scoreBox.innerHTML = 'Score:' + score
        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y })
        let a = 2;
        let b = 16;
        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
    }

    // moving the snake
    for (let i = snakeArr.length - 2; i >= 0; i--) {

        snakeArr[i + 1] = { ...snakeArr[i] }
    }
    snakeArr[0].x += inputDir.x
    snakeArr[0].y += inputDir.y
    // part 2
    let board = document.querySelector('.board')
    board.innerHTML = ''
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if (index === 0) {
            snakeElement.classList.add('head')
        }
        else {
            snakeElement.classList.add('snake')
        }
        board.appendChild(snakeElement)
    })
    //display the food
    foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food')
    board.appendChild(foodElement)

}



//main login start here
window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
    inputDir = { x: 0, y: 1 } // start game
    switch (e.key) {
        case "ArrowUp":
            console.log('Arrow up');
            inputDir.x = 0;
            inputDir.y = -1;
            break;
        case "ArrowDown":
            console.log('Arrow down');
            inputDir.x = 0;
            inputDir.y = 1;
            break;
        case "ArrowLeft":
            console.log('Arrow left');
            inputDir.x = -1;
            inputDir.y = 0;
            break;
        case "ArrowRight":
            console.log('Arrow Right');
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        default:
            break;
    }
})













