    // const scene = new Scene();
    const arrows =[] // Quiver (Array of arrows to limit shots)
    const targets =[] // All targets together
    const desireables = [] // Good Targets, earns you points for hitting
    const undesireables = [] // Bad Targets, takes away lifes for every hit
    let score = 0;
    let heartsList = new Array(5).fill().map((_,index) => new Heart(50,50, index));
    const printScore = document.querySelector('#score')
    const highscores = [];
    
    
    function checkHighscore(score){
        for(let i =0; i < 3; i++){
            if(score> highscores[i]){
                highscores.push(score)

            }
        }
        return highscores.sort((a,b) => b-a)
    }
    // Creating targets
    function spawnTargets (){
       let imageId = Math.floor(Math.random()*6)
       console.log(imageId)
       desireables.push(new Desireables(1, imageId))
       undesireables.push(new Toxics())
       
    };
    
    // Creating animation
    
    
    function update() {
        ctx.clearRect(0,0, canvas.width, canvas.height);
        
        if(startGame){
            player.draw();
            // drawHeart()
            heartsList[0].draw()
            printScore.innerHTML =`${score}`
                    
                    
                    arrows.forEach((arrow, arrowIndex) =>{
                        arrow.traceShot()
                        this.id = arrowIndex
                
                    })
            undesireables.forEach((target, targetIndex) => {
                target.draw();
                target.move(1)
                if(target.position.x > canvas.width + target.width || target.position.y > canvas.height + target.height){
                    undesireables.splice(targetIndex,1)
                }
                
                arrows.forEach((arrow, arrowIndex) =>{
                    if(distance(arrow,target) < arrow.height + target.height/10 ||distance(arrow,target) < arrow.width + target.width/10 ){
                        undesireables.splice(targetIndex, 1)
                        arrows.splice(arrowIndex,1)
                        heartsList[0].lives -=1
                        
                    }
                })
            })
        desireables.forEach((target, targetIndex) => {
            
            target.draw();
            target.move(1);
            if(target.position.x > canvas.width + target.width || target.position.y > canvas.height + target.height){
                desireables.splice(targetIndex,1)
            }
            
            
            arrows.forEach((arrow, arrowIndex) =>{
                
                if(distance(arrow,target) < arrow.height + target.height/2 ||distance(arrow,target) < arrow.width + target.width/10 ){
                    score += target.points
                    printScore.innerHTML= `${score}`
                    desireables.splice(targetIndex, 1)
                    arrows.splice(arrowIndex,1)
                }
                if(arrow.x + arrow.width < 0 || arrow.x - arrow.width > canvas.width || arrow.y + arrow.height < 0 || arrow.y - arrow.height > canvas.height){
                    arrows.splice(arrowIndex,1)
                }
            })
        })
        heartsList[0].draw()
            printScore.innerHTML =`${score}`
    }
    else if(!startGame){
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        ctx.font = '20px hydrophilia-iced'
        ctx.fillText('You are the cupid!', canvas.width/2 -70, 100)
        ctx.fillText('Make people fall in love by', canvas.width/2-105, 130)
        ctx.fillText('hitting them with your arrows.', canvas.width/2-115, 160)
        ctx.fillText('Avoid targeting the toxic ogres!', canvas.width/2-120, 190)
        ctx.fillText('Instructions:', canvas.width/2-40, 250)
        ctx.fillText('Move with the arrow keys or with WASD.', canvas.width/2-170, 280)
        ctx.fillText('Shoot with left click.', canvas.width/2-80, 310)
        ctx.font = '25px hydrophilia-iced'
        ctx.fillText('Press Enter or left-click to start the game', canvas.width/2 -200, canvas.height-100)
    }
    
    if(heartsList[0].lives > 0){
        requestAnimationFrame(update)
    }
    else{
        checkHighscore(score)
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        ctx.fillText(`Game over!`, canvas.width/2 -60, canvas.height/2 -60)
        ctx.fillText(`You scored ${score} points`, canvas.width/2 -100, canvas.height/2)
        setTimeout(() => {
            startGame=false
            
        }, 2000);
    }
}
        
        function shootArrows(x,y){
            arrows.push(new Projectile(player.x+15, player.y, {
                x,y
        }, null))
    }

addEventListener('click',(event)=>{
    const angle = Math.atan2(event.offsetY - player.y, event.offsetX - player.x)
    const directionX = Math.cos(angle) *4
    const directionY = Math.sin(angle) *4
    
    
    
    if (!startGame) {
        player.draw()
        setInterval(() => {
            spawnTargets()
        }, 1000)
        startGame = true
    }
    else{
        shootArrows(directionX, directionY)
    }
})

let playerImgId = 0
addEventListener('keydown', (e)=>{
    
    
    switch(e.code){
        case 'ArrowUp':
        case 'KeyW':
            player.image.src = imgArray[0] ? imgArray[1]: imgArray[0]
            player.moveUp()
            break;
        case 'ArrowDown':
        case 'KeyS':
            player.image.src = imgArray[1] ? imgArray[0] : imgArray[1]
            player.moveDown()
            break;
        case 'ArrowLeft':
        case 'KeyA':
            player.image.src = imgArray[1] ? imgArray[0] : imgArray[1]
            player.moveLeft()
            break;
        case 'ArrowRight':
        case 'KeyD':
            player.image.src = imgArray[0] ? imgArray[1] : imgArray[0]
            player.moveRight()
            break;
        case 'Space':
            arrows.push(new Projectile(player.x+ 18, player.y, {
                x: Math.cos(-1.57) *4,
                y: Math.sin(-1.57) *4
            }, null)) 
            break;
            case 'Enter':
                startGame = true
                break;


}


})

update()

