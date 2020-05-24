
var ctx = document.getElementById('myCanvas').getContext('2d');
var offset = 60;
let startX = 0;
let startY = 0;

for (let i = 1; i < 10; i++) {
    drawLine(0, 60 * i, offset * 10, 60 * i);
    drawLine(60 * i, 0, 60 * i, 60 * 10);
}

let feald = [];
for (let i = 0; i < 10; i++) {
    feald[i] = [];
    for (let j = 0; j < 10; j++) {
        feald[i][j] = 0;
    }
}
let count = 0;

function drow() {
        let x = getRandomIntInclusive(0, 9);
        let y = getRandomIntInclusive(0, 9);
        if (feald[x][y] == 0) {
            let color = `rgb(${getRandomIntInclusive(0, 255)},${getRandomIntInclusive(0, 255)},${getRandomIntInclusive(0, 255)})`;
            drawCell(x * 60, y * 60, color);
            feald[x][y] = 1;
            count++;
            setTimeout(function(){ let value = "2 seconds" }, 1000);
        }
        window.requestAnimationFrame(drow);
}

if(count==100){
    document.write("<h2>Заполнение завершено!</h2>");
}


function drawLine(x0, y0, x1, y1) {
    ctx.beginPath();       // Start a new path
    ctx.strokeStyle = "black";
    ctx.moveTo(x0, y0);    // Move the pen to (x0, y0)
    ctx.lineTo(x1, y1);    // Draw a line to (x1, y1)
    ctx.stroke();          // Render the path
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function sleep(ms) {
    ms += new Date().getTime();
    while (new Date() < ms) { }
}

function drawCell(x, y, color) {
    ctx.beginPath();
    ctx.rect(x, y, 60, 60);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

drow();



