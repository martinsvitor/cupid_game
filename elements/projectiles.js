// Creating missiles

class Projectile{
    constructor(x, y, velocity, id){
        this.position ={
            x: x,
            y: y,
        }
        this.id= id
        // this.speedX = 0,
        // this.speedY = 0,
        const image4 = new Image()
        image4.src = '../images/arrow.png'
        image4.onload = () => {
            this.image = image4
            this.width= this.image.width * .5
            this.height = this.image.height * .5

        }
        this.velocity= velocity
        
        
        
    }
    draw(){
        if(this.image){ ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)}

        // this.x += this.speedX;
        // this.y += this.speedY;
    }
    traceShot(){
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }
}
