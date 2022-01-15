let startGame = false
class Ship{
    constructor(){
        this.x= canvas.width /2,
        this.y= canvas.height /2,
        this.speedX = 0,
        this.speedY = 0,
        this.radius= 20,
        this.color= 'red'
        this.movement = false
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI *2);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();

        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width + this.radius) {
            this.x = - this.radius
        }
        if (this.x < - this.radius) {
            this.x = canvas.width + this.radius 
        }
        if (this.y > canvas.height + this.radius) {
            this.y = - this.radius
        }
        if (this.y < -this.radius) {
            this.y = canvas.height + this.radius
        }
    }
    moveUp() {
        if(this.speedY > -4){
            // this.speedX = 0;
            this.speedY -= .1;
            this.movement = true
        }
        else{
            // this.speedX = 0;
            this.speedY = -4;
        }
        }
    moveDown() {
        if (this.speedY < 4) {
            // this.speedX = 0;
            this.speedY += .1;
            this.movement = true
        } else {
            // this.speedX = 0;
            this.speedY = 4;
        }
    }
    moveRight() {
        if (this.speedX < 4){
            this.speedX += .1
            this.movement = true
            
        }
        else{
            this.speedX = 4;
        // this.speedY = 0;
    }

    }
    moveLeft() {
        if (this.speedX > -4){
            this.speedX -= .1
        }
        else{this.speedX = -4;
        // this.speedY = 0;}
        
    }
}
}
const player = new Ship()

function draw(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    player.draw();

}





