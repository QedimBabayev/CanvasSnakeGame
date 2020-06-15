function Snake(){
    this.x = 0;
    this.y = 0;
    this.xSpeed = rate;  
    this.ySpeed = 0;
    this.total = 0;
    this.score = 0;
    this.tail = [];
    this.draw = function(){
        ctx.fillStyle = "#FFFFFF";
        for(let i =0; i < this.tail.length; i++)
        {
        ctx.fillRect(this.tail[i].x,this.tail[i].y,rate,rate);

        }
        ctx.fillRect(this.x,this.y,rate,rate);
    }

    this.update = function(){

        for(let i =0; i < this.tail.length -1; i++)
        {
            this.tail[i] = this.tail[i+1];
        };
      this.tail[this.total-1] = { x : this.x,y: this.y };
      this.x += this.xSpeed;
      this.y += this.ySpeed;

    }

    this.location  = function(value)
    {
        switch(value)
        {
            case "w" : 
            this.xSpeed = 0;
            this.ySpeed = rate * -1;
            break;

            case "a" :
                this.xSpeed = rate * -1;
                this.ySpeed = 0;
                break;
                case "s" :
                    this.xSpeed =0;
                    this.ySpeed = rate * 1;
                    break;
                    case "d" :
                        this.xSpeed = rate;
                        this.ySpeed = 0;
                        break;  
        }
    }

    this.eat = function(food)
    {
        if(this.x === food.x && this.y === food.y)
        {       
                this.score++;
                this.total++;
                document.getElementById('score').innerHTML = this.score;
                return true;
        }
        else{
            false;

        }
    }

    this.collision = function()
    {
        for(let i = 0; i < this.tail.length; i++)
        {
                if((this.x === this.tail[i].x && this.y === this.tail[i].y))
                {
                    this.total = 0;
                    this.tail =[];
                    alert("GAME OVER");
                    location.reload();  
                };
              
               
        }

        if(snake.x > 500 || snake.y > 500)
        {
            location.reload();  
            alert("GAME OVER");
        }
    }
}