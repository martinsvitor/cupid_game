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
                    x: Math.random()*500,
                    y: -100
                };
                this.velocity ={
                    x: this.position.x > 250 ? -Math.random(): Math.random(),
                    y: -1
                }
                this.image = new Image()
                this.image.src = '../images/troll.png'
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
        
        class Heart{
            constructor(id){
                this.image = new Image()
                this.image.src ='../images/life-borderless.png'
                this.width = this.image.width *.4
                this.height = this.image.height *.4
                this.position ={
                    x: 50,
                    y: 20
                }
                this.index = id
                this.lives = 5
            }
            draw(){
                ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
                ctx.font = '20px hydrophilia-iced';
                ctx.fillStyle = '#1e0035'
                ctx.fillText(`x${this.lives}`, this.position.x*1.6, this.position.y*2)
            }
        }


        function drawHeart(){
            heartsList.forEach((heart, heartIndex) => {
                switch(heartIndex){
                    case 0:
                        heart.draw();
                        break;
                    case 1:
                        heart.position.x = 10
                        heart.draw();
                        break;
                    case 2:
                        heart.position.x += heart.width +heart.width
                        heart.draw();
                        break;
                    case 3:
                        heart.position.x += heart.width +heart.width + heart.width
                        heart.draw();
                        break;
                    case 4:
                        heart.position.x += heart.width +heart.width + heart.width +heart.width
                        heart.draw();
                }
                
            })
        }