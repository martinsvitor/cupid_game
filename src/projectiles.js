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
        image4.src = './src/arrow.png'
        image4.onload = () => {
            this.image = image4
            this.width= this.image.width * .5
            this.height = this.image.height * .5

        }
        this.velocity= velocity
        this.rotation = 0
        
        
        
    }
    draw(){
        if(this.image){
            ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        
        }
        
        
    }
    traceShot(){
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }
}
