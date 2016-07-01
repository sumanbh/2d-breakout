var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = canvas.width/2;
var y = canvas.height-30;

var dx = 2;
var dy = -2;

var ballRadius = 10;

function drawBall(){
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "#0095dd";
  ctx.fill();
  ctx.closePath();
}

function draw(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  x += dx;
  y += dy;
  if (y + dy < ballRadius || y + dy > canvas.height - ballRadius){
    dy = -dy;
  }

  if (x + dx < ballRadius || x + dx > canvas.width - ballRadius){
    dx = -dx;
  }
}

setInterval(draw, 10);
