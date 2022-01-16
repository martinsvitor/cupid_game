// Creating missiles
// class Projectile {
//     constructor(velocity, id){
//         this.id = id
//         this.radius = 4
//         this.color = "white"
//         this.sourceX = player.x
//         this.sourceY = player.y
//         this.velocity = velocity
//     }
//     draw(){
//         ctx.beginPath();
//         ctx.arc(this.sourceX, this.sourceY, this.radius, 0, Math.PI *2);        
//         ctx.fillStyle = this.color;
//         ctx.fill();
//         ctx.closePath();

//         this.sourceX += 1
//         this.sourceY += 1
//     }
//     traceShot(){
//         this.sourceX = this.velocity.x
//         this.sourceY = this.velocity.y
//     }
// }

class Projectile{
    constructor(x, y, radius, velocity, id){
        this.x= x
        this.y= y
        this.id= id
        // this.speedX = 0,
        // this.speedY = 0,
        this.radius= radius
        this.image = new Image()
        this.image.src = '../images/arrow.png'
        this.velocity= velocity
        
        
    }
    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.radius, this.radius)

        // this.x += this.speedX;
        // this.y += this.speedY;
    }
    traceShot(){
        this.draw()
        this.x += this.velocity.x
        this.y += this.velocity.y
    }
}
