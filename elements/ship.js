const imgArray = ['../images/cupid01.PNG','../images/cupid02.png']

class Cupid{
    constructor(){
        this.speedX = 0,
        this.speedY = 0,
        this.image = new Image()
        this.image.src = imgArray[0]
        this.width= this.image.width,
        this.height = this.image.height
        this.x= canvas.width /2 -this.width/2,
        this.y= canvas.height /2 -this.height/2,
        this.movement = false
    }
    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)


        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width - this.width) {
            this.x = canvas.width - this.width
            this.speedX = 0
        }
        if (this.x < 0) {
            this.x = 0 
            this.speedX = 0
        }
        if (this.y > canvas.height - this.height) {
            this.y = canvas.height- this.height
            this.speedY = 0
        }
        if (this.y < 0) {
            this.y = 0
            this.speedY = 0
        }
    }
    moveUp() {
        if(this.speedY > -4){
            // this.speedX = 0;
            this.speedY -= .2;
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
            this.speedY += .2;
            this.movement = true
        } else {
            // this.speedX = 0;
            this.speedY = 4;
        }
    }
    moveRight() {
        if (this.speedX < 4){
            this.speedX += .2
            this.movement = true
            
        }
        else{
            this.speedX = 4;
        // this.speedY = 0;
    }

    }
    moveLeft() {
        if (this.speedX > -4){
            this.speedX -= .2
        }
        else{this.speedX = -4;
        // this.speedY = 0;}
        
    }
}
}
const player = new Cupid()

function draw(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    player.draw();

}





