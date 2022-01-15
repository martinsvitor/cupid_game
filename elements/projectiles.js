// Creating missiles
class Projectile {
    constructor(id,destinationX, destinationY){
        this.id = id
        this.radius = 4
        this.color = "white"
        this.sourceX = player.x
        this.sourceY = player.y
        this.destinationX = destinationX
        this.destinationY = destinationY
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.sourceX, this.sourceY, this.radius, 0, Math.PI *2);        
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();

        this.x += 1
        this.y += 1
    }
}

