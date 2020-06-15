function Food(){
    this.x;
    this.y;
    this.location = function(){
        this.x = (Math.floor(Math.random() * rows -1) +1) *rate;
        this.y = (Math.floor(Math.random() * cols -1) +1) *rate;
    }

    this.draw = function()
    {
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(this.x,this.y,rate,rate);
    
}
}