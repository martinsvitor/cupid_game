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
            targets.push(new Targets(null))
            
            console.log(targets)
        // }, 1000)
    };

    // let enemies = new Array(10).fill().map((_, index) => new Targets(index))

    // Creating animation
    
    let updateId
    function update() {
        updateId = requestAnimationFrame(update) //Will be used to freeze the game when player runs out of lives
    if(startGame){
        ctx.clearRect(0,0, canvas.width, canvas.height);
        player.draw();
      
        arrows.forEach((arrow, arrowIndex) =>{
                arrow.traceShot()
                this.id = arrowIndex
        })
        targets.forEach((target, targetIndex) => {
            target.draw();
            target.move(1)
            if(distance(target,target) < target.radius+1){
                target.move(-1)

            }
            arrows.forEach((arrow, arrowIndex) =>{
                if(distance(arrow,target) < arrow.radius + target.radius + 1){
                    targets.splice(targetIndex, 1)
                    arrows.splice(arrowIndex,1)
                }
            })
        })
        
    }
    
    requestAnimationFrame(update)
}


addEventListener('click',(event)=>{
    const angle = Math.atan2(event.clientY - player.y, event.clientX - player.x)
    const directionX = Math.cos(angle)
    const directionY = Math.sin(angle)
    
    
    
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