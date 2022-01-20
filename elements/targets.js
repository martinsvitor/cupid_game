const desireableImages =['../images/char01.png','../images/char02.png','../images/char03.png', '../images/char04.png', '../images/char05.png', '../images/char06.png']
class Desireables {
    constructor(index, imgId){
            this.id = index;
            this.position ={
                x: Math.random()*500,
                y: -100
            };
            this.velocity ={
                x: this.position.x > 250 ? -Math.random(): Math.random(),
                y: -1
            }
            this.image = new Image()
            this.image.src = desireableImages[imgId]
            this.width = this.image.width
            this.height = this.image.height
            this.points = 10
                        
    }
    draw(){
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
             
    }
    move(offset){
        this.position.x += this.velocity.x
        this.position.y -= this.velocity.y    
        }
    }
    
    class Toxics {
        constructor(index){
            this.id = index;
            this.position ={
                x: 100,
                y: 100,
            };
            this.velocity ={
                x: 0,
                y: 0
            }
            const image3 = new Image()
            image3.src = '../images/troll.png'
            image3.onload = () => {
                this.image = image3
                this.width = this.image.width
                this.height = this.image.height

            }
        }
        draw(){
            if(this.image){ctx.drawImage(this.image, this.x, this.y, this.width, this.height)}
            
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
            
        }
        move(offset){
            if (this.speedX === 0) {
                this.speedX = 1 *offset
                this.speedY = 1 *2 *offset
            }
            // else if(this.speedY < 7 || this.speedX < 7 || this.speedX < -7 || this.speedY < -7) {
                //     this.speedX += (Math.random() - .5)*.5
            //     this.speedY += (Math.random() - .5)*.5
            // }
            // else{
                //     this.speedX = 7
                //     this.speedY = 7
                // }
                
            }
        }