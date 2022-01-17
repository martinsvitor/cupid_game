// const projectiles = new Projectile(1)
// arrows.push(new Projectile({
    //     x:1,
    //     y:1,
    // }, 0))
    
    const arrows =[] // Quiver (Array of arrows to limit shots)
    const targets =[] // All targets together
    const desireables = [] // Good Targets, earns you points for hitting
    const undesireables = [] // Bad Targets, takes away lifes for every hit
    
    // Creating targets
    function spawnTargets (){
        
            // setInterval(() => {
            desireables.push(new Desireables())
            undesireables.push(new Toxics)
            
            console.log(desireables, targets)
        // }, 1000)
    };

    // let enemies = new Array(10).fill().map((_, index) => new Targets(index))

    // Creating animation
    
    let updateId
    function update() {

        if(startGame){
        ctx.clearRect(0,0, canvas.width, canvas.height);
        player.draw();
      
        arrows.forEach((arrow, arrowIndex) =>{
                arrow.traceShot()
                this.id = arrowIndex
        })
        undesireables.forEach((target, targetIndex) => {
            target.draw();
            target.move(1)
            
            arrows.forEach((arrow, arrowIndex) =>{
                if(distance(arrow,target) < arrow.radius + target.radius + 1){
                    undesireables.splice(targetIndex, 1)
                    arrows.splice(arrowIndex,1)
                }
            })
        })
        desireables.forEach((target, targetIndex) => {
            
            target.draw();
            target.move(1)
            if(distance(target,target) < target.radius+1){
                target.move(-1)

            }
            arrows.forEach((arrow, arrowIndex) =>{
                if(distance(arrow,target) < arrow.radius + target.radius){
                    desireables.splice(targetIndex, 1)
                    arrows.splice(arrowIndex,1)
                }
                if(arrow.x + arrow.radius < 0 || arrow.x - arrow.radius > canvas.width || arrow.y + arrow.radius < 0 || arrow.y - arrow.radius > canvas.height){
                    arrows.splice(arrowIndex,1)
                }
            })
        })
        
    }
    
    requestAnimationFrame(update)
}


addEventListener('click',(event)=>{
    const angle = Math.atan2(event.clientY - player.y, event.clientX - player.x)
    const directionX = Math.cos(angle) *4
    const directionY = Math.sin(angle) *4
    
    
    
    if (!startGame) {
        player.draw()
        startGame = true
    }
    else{
        arrows.push(new Projectile(player.x+20, player.y, 25, {
            x: directionX,
            y: directionY
        }, null)) 
    }
})

addEventListener('keydown', (e)=>{
    let moveCount = 1
    if(moveCount > 0){
        player.image.src = imgArray[1]
        moveCount = 0
        }
    else{
        player.image.src = imgArray[moveCount]
        console.log(player.image.src = imgArray[moveCount])
    }
    switch(e.code){
        case 'ArrowUp':
        case 'KeyW':
            player.moveUp()
            break;
        case 'ArrowDown':
        case 'KeyS':
            player.moveDown()
            break;
        case 'ArrowLeft':
        case 'KeyA':
            player.moveLeft()
            break;
        case 'ArrowRight':
        case 'KeyD':
            player.moveRight()
            break;

}

})
update()
spawnTargets()