var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var rate = 10;
var rows = canvas.width / rate;
var cols = canvas.height / rate;
(function(){
snake = new Snake();
food = new Food();

food.location();

window.setInterval(()=>{
    ctx.clearRect(0,0,canvas.width, canvas.height);
    food.draw();
    snake.draw();
    snake.update();
    snake.collision();
    if(snake.eat(food))
    {
        food.location();
    }
}, 100)
}());


window.addEventListener('keydown',(event)=>{
 var value = event.key;
snake.location(value);// send value parameter to snake 
})